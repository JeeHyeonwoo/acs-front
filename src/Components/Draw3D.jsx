import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    canvas {
        width: 100% !important;
        height: 100% !important;
        display: block !important;
    }
`;

const Draw3D = ({dots, rectangles}) => {
    
    return (
        <CanvasContainer>
            <Canvas
                style={{ width: '100%', height: '100%' }}
                camera={{ position: [0, 0, 1000], fov: 45 }}
            >
                <directionalLight position={[1,1,1]} intensity={0.5} />
                <directionalLight position={[-1,-1,-1]} intensity={0.3} />
                <ambientLight intensity={0.8} />

                {rectangles.map((rect) => (
                    <mesh
                        key={rect.id}
                        position={[
                            rect.x - 400,
                            -rect.y + 300,
                            rect.z
                        ]}
                    >
                        <boxGeometry args={[rect.width, rect.height, 20]} />
                        <meshStandardMaterial 
                            color="#4287f5"
                            transparent
                            opacity={0.5}
                            roughness={0.1}
                            metalness={0.1}
                        />
                    </mesh>
                ))}

                {dots.map((dot) => (
                    <mesh
                        key={dot.id}
                        position={[
                            dot.x - 400,
                            -dot.y + 300,
                            dot.z
                        ]}
                    >
                        <sphereGeometry args={[5, 32, 32]} />
                        <meshStandardMaterial 
                            color="#ff0000"
                            roughness={0.1}
                            metalness={0.8}
                        />
                    </mesh>
                ))}

                <OrbitControls />
            </Canvas>
        </CanvasContainer>
    )
}

export default Draw3D;