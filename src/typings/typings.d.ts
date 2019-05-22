declare var __DEV__: boolean;
declare var __API_URL__: string;

declare module '*.scss' {
  export const classes: { [key: string]: string };
}

interface Window {
  __DEV__: boolean;
  __API_URL__: string;
}
