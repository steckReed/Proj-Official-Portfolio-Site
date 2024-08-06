export type ColorMap = Map<string, string>;

const statusColors: ColorMap = new Map([
  ['In Development' , '#ef5555'],
  ['New'            , 'rgb(72, 172, 27)']
]);

export default statusColors;
