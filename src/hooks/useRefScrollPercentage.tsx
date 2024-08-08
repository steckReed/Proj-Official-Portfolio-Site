import { useEffect, useState } from 'react';

const useRefScrollPercentage = (
  containerRef  : React.RefObject<HTMLElement>,
  atScreen      : number = 1
): number => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const windowHeight = window.innerHeight;
      const screenTrigger = windowHeight * atScreen;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;

      if (elementTop > screenTrigger) {
        setScrollPercentage(0);
      } else if (elementBottom < screenTrigger) {
        setScrollPercentage(100);
      } else {
        const visibleHeight = Math.min(screenTrigger - elementTop, elementHeight);
        const percentage = (visibleHeight / elementHeight) * 100;
        setScrollPercentage(percentage);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the percentage

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollPercentage;
};

export default useRefScrollPercentage;
