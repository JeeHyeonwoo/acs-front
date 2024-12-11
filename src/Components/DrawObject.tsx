import React from "react";
const Rectangle = ({ 
    x = 0, 
    y = 0, 
    width = 100, 
    height = 100, 
    color = '#000000',
    borderWidth = 2 
  }) => {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
          width: `${width}px`,
          height: `${height}px`,
          border: `${borderWidth}px solid ${color}`,
          backgroundColor: 'transparent'
        }}
      />
    );
  };
  
  export default Rectangle;
  