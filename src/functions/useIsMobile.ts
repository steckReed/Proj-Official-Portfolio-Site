import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaQueryChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
