import React from "react";
import type { Dot as DotType } from "../Type/Dot";
import type { Rectangle as RectangleType } from "../Type/Rectangle";
import DrawRectangle from "./DrawObject";
import DrawDot from "./DrawDot";

const Draw2D = ({ dots, rectangles}: {dots : Array<DotType>, rectangles : Array<RectangleType>}) => {
    return (
        <>
                {rectangles.map((rec) => (
                    <DrawRectangle 
                        key={rec.id} 
                        x={rec.x}
                        y={rec.y}
                        width={rec.width}
                        height={rec.height}
                    />
                ))}
                
                {dots.map((dot) => (
                    <DrawDot key={dot.id} x={dot.x} y={dot.y} />
                ))}
         </>
    )
}

export default Draw2D;
