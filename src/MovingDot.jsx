import React, { useState } from 'react';
const MovingDot = () => {
  const [position, setDotPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onPointerMove={(e) => {
        setDotPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
      }}
    >
  <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
};

export default MovingDot;
