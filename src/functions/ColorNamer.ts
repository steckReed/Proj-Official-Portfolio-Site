import namer from 'color-namer';

interface Props {
  hex: string;
}

const ColorName = ({ hex }: Props) => {
  const result = namer(hex);
  return(result.pantone[0].name)
  
};

export default ColorName;
