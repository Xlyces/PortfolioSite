import React, { useState, useEffect } from 'react';

function FirstPhoto() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        //marginTop: '2rem',
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
        overflow:'hidden'
      }}
    >
      <img
        style={{
          width: '100%',
        }}
        src="https://image.hkhl.hk/f/1024p0/0x0/100/none/04d2c75703888329707e4cb5dceda537/2023-09/C6_2.jpg"
      />
    </div>
  );
}

export default FirstPhoto;