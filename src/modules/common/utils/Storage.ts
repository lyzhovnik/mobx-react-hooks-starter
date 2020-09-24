export enum StorageType {
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage',
}

class Storage {
  private readonly type: StorageType;

  constructor(type: StorageType) {
    this.type = type;
  }

  public get<T = any>(key: string): T | null {
    const data = window[this.type].getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public put(key: string, data: any): void {
    window[this.type].setItem(key, JSON.stringify(data));
  }

  public remove(key: string): void {
    window[this.type].removeItem(key);
  }

  public clear(): void {
    window[this.type].clear();
  }
}

export default (type: StorageType) => new Storage(type);
