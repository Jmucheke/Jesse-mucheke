import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  return scrollDir;
};

export default useScrollDirection;
