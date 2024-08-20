import { ReactNode } from 'react';

interface Props{
  children: ReactNode;
}

const CustomChip = ({ children }: Props) => {

  return(
    <span 
      style={{
        backgroundColor: '#00304B',
        padding: '.4rem 1rem',
        borderRadius: '25px',
        fontSize: 'clamp(17px, 4vw, 20px)',
        color: 'white',
        fontWeight:'600',
        letterSpacing:'2px'
      }}
    >
      {children}
    </span>
  )
};

export default CustomChip;
