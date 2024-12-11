import React from "react";

const Dot = ({ x = 0, y = 0, size = 10, color = '#ff0000' }) => {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    );
  };
  
  export default Dot; 