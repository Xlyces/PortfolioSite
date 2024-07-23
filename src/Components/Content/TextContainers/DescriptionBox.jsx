import React, { useState, useEffect, useRef } from 'react';

function DescriptionBox({ heading, content }) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '80vh',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        //border:'green 1px solid'
      }}
    >
      <p
        style={{
          fontWeight: '800',
          fontSize: '2.6rem',
          paddingBottom: '3rem',
        }}
      >
        {heading}
      </p>
      <p
        style={{
          fontSize: '1.3rem',
          display: 'flex',
          textAlign: 'center',
          width: '60%',
          lineHeight: '3rem',
        }}
      >
        {content}
      </p>
    </div>
  );
}

export default DescriptionBox;