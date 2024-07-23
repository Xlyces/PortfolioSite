import React, { useRef, useEffect, useState } from 'react';

function BigSkillSubBox({ image, skill, skillDescription }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Become visible when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        height: '20rem',
        overflow: 'hidden',
        marginBottom: '2rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.5s, transform 0.5s',
        marginLeft:'1rem'
      }}
    >
      <div
        className="imageContainer"
        style={{
          width: '30rem',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img src={image} style={{ width: 'auto', height: '100%', objectFit: 'cover' }} />
      </div>
      <div
        className="textContainer"
        style={{
          padding: '3rem',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <h3 style={{color:'#b69d74'}}>{skill}</h3>
        <p>{skillDescription}</p>
      </div>
    </div>
  );
}

export default BigSkillSubBox;