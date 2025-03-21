import { useEffect, useState } from 'react'

export const useResize = (pixels = 1023) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= pixels);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= pixels);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
