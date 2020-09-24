import * as React from 'react';
import castArray from 'lodash/castArray';
import compact from 'lodash/compact';
import map from 'lodash/map';
import merge from 'lodash/merge';
import union from 'lodash/union';
import without from 'lodash/without';

export const combine = <ModuleType>(modules: ModuleType[], extractor: (x: ModuleType) => any): any[] =>
  without(union(...map(modules, res => castArray(extractor(res)))), undefined);

interface ModuleShape {
  reducer?: any | any[];
  dataRootComponent?: React.ComponentType | React.ComponentType[];
  data?: any | any[];
  route?: React.ReactElement | Array<React.ReactElement>;
  navItem?: Array<{ component: React.ReactElement; url: string }>;
}

class Module implements ModuleShape {
  public reducer: any[];
  public dataRootComponent: React.ComponentType[];
  public data: any[];
  public route: Array<React.ReactElement>;
  public navItem: Array<{ component: React.ReactElement; url: string }>;

  constructor(...modules: ModuleShape[]) {
    this.reducer = combine(modules, arg => arg.reducer);
    this.dataRootComponent = combine(modules, arg => arg.dataRootComponent);
    this.route = combine(modules, arg => arg.route);
    this.navItem = compact(modules.map(module => module.navItem).flat(1));
    const empty: ModuleShape = {};
    this.data = combine([empty].concat(Array.from(modules)), arg => arg.data).reduce(
      (acc, el) => [{ ...acc[0], ...el }],
      [{}],
    );
  }

  get reducers() {
    return merge({}, ...this.reducer);
  }

  public getDataRoot(root: React.ReactElement) {
    let nestedRoot = root;
    for (const component of this.dataRootComponent) {
      nestedRoot = React.createElement(component, {}, nestedRoot);
    }
    return nestedRoot;
  }

  get routes() {
    return this.route.map((component: React.ReactElement, idx: number) =>
      React.cloneElement(component, { key: idx + this.route.length }),
    );
  }
}

export default Module;
