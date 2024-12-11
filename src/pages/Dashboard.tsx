import React, { useEffect, useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import InfoTableList from '../Components/InfoTableList';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Draw2D from '../Components/Draw2D';
import Draw3D from '../Components/Draw3D';

const Dashboard = () => {
    const [rectangles, setRectangles] = useState([
        { id: "1", x: 100, y: 100, width: 100, height: 100, z: 0 },
        { id: "2", x: 300, y: 100, width: 150, height: 150, z: 100 }
      ]);
      
      const [dots, setDots] = useState([
        { id: 1, rectId: "1", x: 100, y: 100, angle: 0, z: 0 },
        { id: 2, rectId: "2", x: 300, y: 100, angle: Math.PI, z: 100 }
      ]);

      const [viewMode, setViewMode] = useState('2D');
      
      useEffect(() => {
        const interval = setInterval(() => {
          setDots(prevDots => {
            return prevDots.map(dot => {
              const rect = rectangles.find(r => r.id === dot.rectId);
              const newAngle = (dot.angle + 0.1) % (2 * Math.PI);
              
              let newX, newY, newZ;
              const heightOffset = 50;

              if (newAngle <= Math.PI/2) {
                newX = rect.x + (newAngle / (Math.PI/2)) * rect.width;
                newY = rect.y;
                newZ = rect.z + Math.sin(newAngle) * heightOffset;
              } else if (newAngle <= Math.PI) {
                newX = rect.x + rect.width;
                newY = rect.y + ((newAngle % (Math.PI/2)) / (Math.PI/2)) * rect.height;
                newZ = rect.z + Math.sin(newAngle) * heightOffset;
              } else if (newAngle <= Math.PI * 3/2) {
                newX = rect.x + rect.width - ((newAngle % (Math.PI/2)) / (Math.PI/2)) * rect.width;
                newY = rect.y + rect.height;
                newZ = rect.z + Math.sin(newAngle) * heightOffset;
              } else {
                newX = rect.x;
                newY = rect.y + rect.height - ((newAngle % (Math.PI/2)) / (Math.PI/2)) * rect.height;
                newZ = rect.z + Math.sin(newAngle) * heightOffset;
              }
              
              return { ...dot, x: newX, y: newY, z: newZ, angle: newAngle };
            });
          });
        }, 500);
    
        return () => clearInterval(interval);
      }, [rectangles]);
    

    const renderComponent = useMemo(() => {
        return viewMode === "2D" ? 
            <Draw2D rectangles={rectangles} dots={dots} />
            :
            <Draw3D rectangles={rectangles} dots={dots} />
    }, [viewMode, rectangles, dots]);
    
    return (
        <DashboardWrapper>
            <Sidebar>
                <InfoTableList />
            </Sidebar>                        
            <MainContent>
                <MainContentTitle>
                    <h1>Dashboard</h1>
                </MainContentTitle>
                <DrawContainer>
                    <TransformWrapper 
                        initialScale={1} 
                        minScale={1} 
                        maxScale={10}
                        panning={{ disabled: false }}
                        centerOnInit={false}
                        alignmentAnimation={{ disabled: true }}
                        velocityAnimation={{ disabled: true }}
                        limitToBounds={false}
                    >
                        <TransformComponent 
                            wrapperStyle={{
                                width: "100%",
                                height: "100%",
                                maxWidth: "100%",
                                maxHeight: "100%"
                            }}>
                            {renderComponent}
                        </TransformComponent>
                    </TransformWrapper>
                </DrawContainer>
                {/* <ViewModeButton onClick={() => setViewMode('2D')}>2D</ViewModeButton>
                <ViewModeButton onClick={() => setViewMode('3D')}>3D</ViewModeButton> */}
            </MainContent>
        </DashboardWrapper>
    );
}

const DashboardWrapper = styled('div')`
    display: flex;
    height: calc(100vh - 64px); // AppBar 높이만큼 뺌
    width: 100%;
`

const Sidebar = styled('div')`
    width: 15%;
    height: 100%;
    box-sizing: border-box;
`

const MainContent = styled('div')`
    width: 85%;
    height: 100%;
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
`   
const MainContentTitle = styled('div')`
    width: 100%;
    height: 10%;
`
const CanvasContainer = styled('div')`
  width: 100%;
  height: 80%;
`
const DrawContainer = styled('div')`
    width: 100%;
    height: 80%;
    border: 1px solid #000000;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
`
const ViewModeButton = styled('button')`
    padding: 8px 16px;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
        background-color: #1976d2;
    }
`;


export default Dashboard;