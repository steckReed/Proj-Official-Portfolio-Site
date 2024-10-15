import { useEffect, useState } from 'react';
import ChipCarouselRow from './ChipCarouselRow/ChipCarouselRow';
import getScrollSpeedMultiplier from '@/functions/GetScrollSpeedMultiplier';


interface ChipCarouselProps {
  rows        : Array<string[]>;
  directions  : Array<'left' | 'right'>;
  speeds      : Array<number>;
  colors      ?: Array<string>;
  itemGap     ?: Array<number>;
}

const ChipCarousel: React.FC<ChipCarouselProps> = ({ 
  rows, 
  directions, 
  speeds, 
  colors,
  itemGap
}) => {
  const [screenWidth, setScreenWidth]                     = useState(0);
  const [hovered, setHovered]                             = useState(false);
  // const [scrollSpeedMultiplier, setScrollSpeedMultiplier] = useState(1);

  // Set screenWidth
  useEffect(() => {
    setScreenWidth(window.innerWidth);

    // Function to update screen width on window resize
    const handleResize = () => {
      const windowWidth: number = window.innerWidth;

      setScreenWidth(windowWidth);
      getScrollSpeedMultiplier({ screenWidth: windowWidth })
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  /* Temp Removal of on scroll speed change
    - Bit too buggy, in need of better method for smoothing animation
  */
  // // On scroll speed 
  // useEffect(() => {
  //   const handleScroll = () => { setScrollSpeedMultiplier(2.5); };

  //   // const handleScrollEnd = () => {
  //   //   setTimeout(() => { setScrollSpeedMultiplier(1); }, 300);
  //   // };

  //   const handleScrollEnd = () => {
  //     // Gradually reset speed after scroll ends
  //     setTimeout(() => {
  //       const adjustedMultiplier = getScrollSpeedMultiplier({ screenWidth });
  //       setScrollSpeedMultiplier(adjustedMultiplier);
  //     }, 300);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   window.addEventListener('scroll', handleScrollEnd);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('scroll', handleScrollEnd);
  //   };
  // }, []);

  return (
    <div
      style={{ 
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
        overflow: 'hidden',
        maxWidth: '100vw'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {rows.map((skills, rowIndex) => {

        const baseSpeed = speeds[rowIndex] * getScrollSpeedMultiplier({ screenWidth });

        return(
          <ChipCarouselRow
            key         = {rowIndex}
            screenWidth = {screenWidth}
            skills      = {skills}
            direction   = {directions[rowIndex]}
            speed   = {{
              'hovered' : baseSpeed / 2,
              'base'    : baseSpeed
            }}
            hovered     = {hovered}
            color       = {colors?.[rowIndex] || '#2d3e50'}
            itemGap     = {itemGap?.[rowIndex] || 10}
            // scrollSpeedMultiplier = {scrollSpeedMultiplier}
          />
        )
      })}
    </div>
  );
};


export default ChipCarousel;
