declare module 'color-namer' {
  interface Color {
    name: string;
    hex: string;
    distance: number;
  }

  interface ColorGroup {
    [key: string]: Color[];
  }

  function namer(color: string): ColorGroup;

  export = namer;
}
