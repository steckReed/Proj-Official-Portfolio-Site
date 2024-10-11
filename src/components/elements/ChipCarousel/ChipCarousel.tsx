import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

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
  const [screenWidth, setScreenWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [scrollSpeedMultiplier, setScrollSpeedMultiplier] = useState(1);

  // Set screenWidth
  useEffect(() => {
    setScreenWidth(window.innerWidth);

    // Function to update screen width on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // On scroll speed 
  useEffect(() => {
    const handleScroll = () => { setScrollSpeedMultiplier(2.5); };

    const handleScrollEnd = () => {
      setTimeout(() => { setScrollSpeedMultiplier(1); }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
    };
  }, []);

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
      {rows.map((skills, rowIndex) => (
        <ChipRow
          screenWidth = {screenWidth}
          key         = {rowIndex}
          skills      = {skills}
          direction   = {directions[rowIndex]}
          baseSpeed   = {speeds[rowIndex]}
          hovered     = {hovered}
          color       = {colors?.[rowIndex] || '#2d3e50'}
          itemGap     = {itemGap?.[rowIndex] || 10}
          scrollSpeedMultiplier = {scrollSpeedMultiplier}
        />
      ))}
    </div>
  );
};



interface ChipRowProps {
  screenWidth : number;
  skills      : string[];
  direction   : 'left' | 'right';
  baseSpeed   : number;
  hovered     : boolean;
  color       : string;
  itemGap     : number;
  scrollSpeedMultiplier: number;
}

const ChipRow: React.FC<ChipRowProps> = ({
  screenWidth,
  skills,
  direction,
  baseSpeed,
  hovered,
  color,
  itemGap,
  scrollSpeedMultiplier,
}) => {
  const [rowWidth, setRowWidth]     = useState(screenWidth);
  const [numRepeats, setNumRepeats] = useState(1);
  const rowRef          = useRef<HTMLDivElement>(null);
  const xTranslation    = useMotionValue(-rowWidth);
  const positionFactor  = (direction === 'left') ?(-1) :(1);
  const finalSpeed      = hovered ? (baseSpeed / 2) : (baseSpeed * scrollSpeedMultiplier); // Based on hover/still/scroll

  // Get row width & determine how many times to repeat row len to fill screen
  useEffect(() => {
    const handleResize = () => {
      if (rowRef.current) {
        const rowWidth = rowRef.current.getBoundingClientRect().width;
        setRowWidth(rowWidth)
        
        const repeats = Math.ceil(screenWidth / rowWidth) + 1;
        setNumRepeats(repeats);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  useEffect(() => {
    let animationFrameId: number;
    const finalPosition = rowWidth * positionFactor - itemGap;

    const updatePosition = () => {
      const current = xTranslation.get();
      const delta = positionFactor * finalSpeed * 0.1;
      let nextPosition = current + delta;

      // If at edge, loop back
      if (direction === 'left') {
        nextPosition = nextPosition <= finalPosition ?(nextPosition % finalPosition) :(nextPosition);
      } else {
        nextPosition = nextPosition >= 0 ?(((nextPosition % rowWidth) + rowWidth) % rowWidth - rowWidth) :(nextPosition);

      }

      xTranslation.set(nextPosition);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(updatePosition);

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [xTranslation, finalSpeed, rowWidth, direction, skills.length, positionFactor, itemGap]);

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div ref={rowRef} style={{ x: xTranslation, display: 'flex', gap: `${itemGap}px`, width:'fit-content' }}>
        {Array.from({ length: numRepeats }).map((_, repeatIndex) => (
          skills.map((skill, skillIndex) => (
            <div
              key={`row-${repeatIndex}-${skillIndex}`}
              style={{
                backgroundColor: color,
                color: '#fff',
                whiteSpace: 'nowrap',
                padding: '10px 20px',
                borderRadius: '20px',
                fontWeight: 'bold',
                userSelect: 'none'
              }}
            >
              {skill}
            </div>
          ))
        ))}
      </motion.div>
    </div>
  );
};

export default ChipCarousel;
