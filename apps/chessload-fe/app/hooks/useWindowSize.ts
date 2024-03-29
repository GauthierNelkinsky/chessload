import { useState, useEffect } from 'react';

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    // Set type to undefined or number
    const [windowSize, setWindowSize] = useState<{
      width: number | undefined;
      height: number | undefined;
      isMobile: boolean | undefined;
      isTablet: boolean | undefined;
      isDesktop: boolean | undefined;
    }>({
        width: undefined,
        height: undefined,
        isMobile: undefined,
        isTablet: undefined,
        isDesktop: undefined
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth < 768,
            isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
            isDesktop: window.innerWidth >= 1024
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  export default useWindowSize;