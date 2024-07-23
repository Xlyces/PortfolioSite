import React, { useRef, useEffect, useState } from 'react';

function BigSkillTitle({ skill,imageLink }) {
  const skillTitleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.intersectionRatio > 0.1); // Fade out when 10% of the element is visible
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Fade out when 10% of the element is visible
      }
    );

    if (skillTitleRef.current) {
      observer.observe(skillTitleRef.current);
    }

    return () => {
      if (skillTitleRef.current) {
        observer.unobserve(skillTitleRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        height: '40rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '0',
        position: 'relative',
        backgroundColor: '#0C1016',
        marginBottom:'3rem',
        marginTop:'9rem'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, rgba(12,16,22,1) 0%, rgba(12,16,22,0) 25%, rgba(12,16,22,0) 75%, rgba(12,16,22,1) 100%)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: '0',
        }}
      />
      <img
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'absolute',
          opacity: isVisible ? '0.3' : '0',
          zIndex: '0',
          transition: 'opacity 1s ease-in-out',
        }}
        src={imageLink}
        alt=""
      />
      <div
        ref={skillTitleRef}
        style={{
          height: '25rem',
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '5rem',
          textAlign: 'center',
          color: '#b69d74',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          overflow: 'hidden',
          zIndex: '1000',
        }}
      >
        {skill}
      </div>
    </div>
  );
}

export default BigSkillTitle;