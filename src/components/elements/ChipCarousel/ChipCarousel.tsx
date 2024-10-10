import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface ChipCarouselProps {
  rows        : Array<string[]>;
  directions  : Array<'left' | 'right'>;
  speeds      : Array<number>;
  colors      ?: Array<string>;
}

const ChipCarousel: React.FC<ChipCarouselProps> = ({ rows, directions, speeds, colors }) => {
  const [hovered, setHovered] = useState(false);
  const [scrollSpeedMultiplier, setScrollSpeedMultiplier] = useState(1);

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
          key={rowIndex}
          skills={skills}
          direction={directions[rowIndex]}
          baseSpeed={speeds[rowIndex]}
          hovered={hovered}
          scrollSpeedMultiplier={scrollSpeedMultiplier}
          color={colors?.[rowIndex] || '#2d3e50'}
        />
      ))}
    </div>
  );
};



interface ChipRowProps {
  skills    : string[];
  direction : 'left' | 'right';
  baseSpeed : number;
  hovered   : boolean;
  scrollSpeedMultiplier: number;
  color     : string;
}

const ChipRow: React.FC<ChipRowProps> = ({
  skills,
  direction,
  baseSpeed,
  hovered,
  scrollSpeedMultiplier,
  color
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const xTranslation = useMotionValue(0);
  const [rowWidth, setRowWidth] = useState(0);
  const [numRepeats, setNumRepeats] = useState(1);


  // Get row and screen width to determine how many times to repeat row to fill screen
  useEffect(() => {
    const handleResize = () => {
      if (ref.current && containerRef.current) {
        const rowWidth = ref.current.offsetWidth;
        const screenWidth = containerRef.current.offsetWidth;
        setRowWidth(rowWidth);
        
        const repeats = Math.ceil(screenWidth / rowWidth) + 1;
        setNumRepeats(repeats);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [skills]);


  // Adjust speed based on hover and scroll
  const finalSpeed = hovered ?(baseSpeed / 2) :(baseSpeed * scrollSpeedMultiplier);

  useEffect(() => {
    let animationFrameId: number;

    const finalPosition = direction === 'left' ? (-rowWidth) : rowWidth;

    const updatePosition = () => {
      const current = xTranslation.get();
      const delta = (direction === 'left' ? -1 : 1) * finalSpeed * 0.1;
      let nextPosition = current + delta;

      // If at edge, loop back
      if (
        (direction === 'left' && nextPosition <= finalPosition) || 
        (direction === 'right' && nextPosition >= finalPosition)
      ) {
        nextPosition = direction === 'left' ? 0 : -rowWidth;
      }

      xTranslation.set(nextPosition);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(updatePosition);

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [xTranslation, finalSpeed, rowWidth, direction]);

  return (
    <div ref={containerRef} style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div ref={ref} style={{ x: xTranslation, display: 'flex', gap: '10px' }}>
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
