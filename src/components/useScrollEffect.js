import { useEffect } from 'react';

const useScrollEffect = () => {
  useEffect(() => {
    // Handle scroll event for navbar
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar');
      if (window.scrollY > 0) {
        navBar.classList.add('scrolled'); // Add class when scrolling
      } else {
        navBar.classList.remove('scrolled'); // Remove class when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollEffect;
