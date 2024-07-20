import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      const mobile = window.matchMedia('(max-width: 767px)');
      const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
      
      setIsMobile(mobile.matches);
      setIsTablet(tablet.matches);
    };

    checkDeviceSize();

    window.addEventListener('resize', checkDeviceSize);
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, []);

  return { isMobile, isTablet };
};

export default useDeviceSize;
