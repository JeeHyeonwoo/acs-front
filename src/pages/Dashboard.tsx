import React from 'react';
import { styled } from '@mui/material/styles';
import InfoTableList from '../Components/InfoTableList';
const Dashboard = () => {
    return (
        <>
            <Sidebar>
                <InfoTableList />
            </Sidebar>                        
            <MainContent>

            </MainContent>
        </>
    );
}

const Sidebar = styled('div')`
    width: 15%;
    height: 100%;
    box-sizing: border-box;
`

const MainContent = styled('div')`
    width: 85%;
    height: 100%;
    background-color: #f0f0f0;
`   

export default Dashboard;