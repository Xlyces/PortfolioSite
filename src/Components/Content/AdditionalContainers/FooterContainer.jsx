import React, { useEffect, useRef } from 'react';
import styles from '../AdditionalContainers/FooterContainerStyles.css';

function FooterContainer() {
  const containerRef = useRef(null);
  const fadeInRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
    observer.observe(fadeInRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fade-in-container"
      style={{
        height: '30rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem',
        paddingBottom: '1rem',
        alignItems: 'center',
        marginTop: '20rem',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fade-in 1s ease-in-out forwards',
      }}
    >
      <div
        className="fade-in-text"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '2rem',
          lineHeight: '3rem',
          marginBottom: '2rem',
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fade-in 1s ease-in-out forwards',
        }}
      >
        That's it for now! Thank you for learning more about me!
      </div>
      <div
        ref={fadeInRef}
        className="fade-in-container fade-in-delay"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fade-in 1s ease-in-out forwards 2s',
        }}
      >
        <div
          className="fade-in-text fade-in-delay"
          style={{
            fontSize: '2rem',
            marginBottom: '3rem',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fade-in 1s ease-in-out forwards 1s',
          }}
        >
          Now, can I learn more about you?
        </div>
        <div
          className="fade-in-text fade-in-delay"
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '1rem',
            lineHeight: '2rem',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fade-in 1s ease-in-out forwards 1s',
          }}
        >
          <div>Please Contact me at:</div>
          <div>+852 46119919</div>
          <div>nathanchoi@gmail.com</div>
          <a
            style={{
              textDecoration: 'none',
              color: '#b69d74',
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'fade-in 1s ease-in-out forwards 1s',
            }}
            href="www.linkedin.com/in/nathan-choi-272155204"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterContainer;