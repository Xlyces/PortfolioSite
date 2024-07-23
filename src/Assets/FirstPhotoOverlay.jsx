import React, { useState, useEffect } from 'react'

function FirstPhotoOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: `rgba(12, 16, 22, ${isVisible ? '0.9' : '0'})`,
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        transition: 'all 2s ease-in-out',
        paddingBottom: '3rem',
        paddingLeft: '2rem',
        opacity: isVisible ? '1' : '0',
      }}
    >
      <div
        style={{
          opacity: isVisible ? '1' : '0',
          transition: 'opacity 2s ease-in-out',
          fontSize: '3.5rem',
          bottom: '3rem',
          left: '3rem',
          color: '#b69d74',
          fontFamily: 'Noto Serif SC',
        }}
      >
        Hello, I'm Nathan Choi.
        <br />
        <p style={{fontSize:'2rem'}}>你好，我是蔡立言。</p>
      </div>
    </div>
  );
}

export default FirstPhotoOverlay;