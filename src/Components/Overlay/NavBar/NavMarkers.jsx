import React, { useEffect, useState, useRef } from 'react';

function NavMarkers() {
  const [marker, setMarker] = useState('Greetings');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const prevMarker = useRef(marker);
  const scrollTimer = useRef(null);

  const handleMarker = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;
    const progress = (scrollY / (documentHeight - windowHeight)) * 100;

    if (progress >= 0 && progress < 9.4) {
      handleTransition('Greetings');
    } else if (progress >= 9.4 && progress < 13.18) {
      handleTransition('Skills and Experience');
    } else if (progress >= 13.18 && progress < 33.2) {
      handleTransition('Fundamental Skills & Experiences');
    } else if (progress >= 33.2 && progress < 66.5) {
      handleTransition('Unique Skills & Experiences');
    } else if (progress >= 66.5 && progress < 69.18) {
      handleTransition('More about me');
    } else if (progress >= 69.18 && progress < 76.17) {
      handleTransition('Personality Traits');
    } else if (progress >= 76.17 && progress < 98) {
      handleTransition('Interests');
    } else {
        handleTransition('Thank you')
    }
  };

  const handleTransition = (newMarker) => {
    if (newMarker !== prevMarker.current) {
      setIsTransitioning(true);
      setTimeout(() => {
        setMarker(newMarker);
        prevMarker.current = newMarker;
        setIsTransitioning(false);
      }, 500); // Adjust the duration of the transition
    } else {
      setMarker(newMarker);
      prevMarker.current = newMarker;
    }
  };

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500); // Adjust the time to consider the user as "not scrolling"
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleMarker);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleMarker);
    };
  }, []);

  return (
    <div>
      <h2
        style={{
          zIndex: '10',
          color: 'white',
          opacity: isScrolling ? '0' : isTransitioning ? '0' : '1',
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {marker}
      </h2>
    </div>
  );
}

export default NavMarkers;