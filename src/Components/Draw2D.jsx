import React, { useEffect, useRef } from 'react';

const Draw2D = ({ dots, rectangles }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Canvas 크기를 부모 요소에 맞춤
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        rectangles.forEach(rect => {
            ctx.strokeStyle = '#4287f5';
            ctx.lineWidth = 2;
            ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
        });
        
        dots.forEach(dot => {
            ctx.beginPath();
            ctx.fillStyle = '#ff0000';
            ctx.arc(dot.x, dot.y, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }, [dots, rectangles]);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default Draw2D;
