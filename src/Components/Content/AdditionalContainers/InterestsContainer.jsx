import React, { useEffect, useState, useRef } from 'react';

function InterestsContainer({ background, interest, interestE }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let observer;

    const handleVisibilityChange = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const initObserver = () => {
      observer = new IntersectionObserver(handleVisibilityChange, {
        threshold: 0.5, // Trigger the animation when the element is 50% visible
      });

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    };

    initObserver();

    return () => {
      if (observer) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="interests-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: isVisible ? 'left center' : '-100% center',
        height: '40rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        opacity: isVisible ? '1' : '0',
        transition: 'opacity 1s ease-in-out, background-position 1s ease-in-out',
      }}
    >
      <div
        style={{
          backgroundColor: '#0C1016',
          padding: '2rem',
          borderRadius: '12px',
          height: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '50%',
          marginLeft: '5%',
          opacity: isVisible ? '0.9' : '0',
          transition: 'opacity 1s ease-in-out 0.5s',
        }}
      >
        <div
          style={{
            color: '#b69d74',
            fontSize: '2rem',
          }}
        >
          {interest}
        </div>
        <div
          style={{
            fontSize: '1rem',
            color: 'white',
          }}
        >
          {interestE}
        </div>
      </div>
    </div>
  );
}

export default InterestsContainer;