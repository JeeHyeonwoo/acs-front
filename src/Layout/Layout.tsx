import React from 'react';
import styled from '@emotion/styled';
import Header from '../Components/Header';
import Dashboard from '../Pages/Dashboard';
import HistoryPage from '../Pages/HistoryPage';

interface LayoutProps {
}

const Layout: React.FC<LayoutProps> = () => {
    const [currentTab, setCurrentTab] = React.useState(0);
    const tabLabels = ["대시보드", "알람", "이력정보", "로그"];

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const renderContent = () => {
        switch(currentTab) {
            case 0:
                return <Dashboard />
            case 1:
                return <div>알람</div>
            case 2:
                return <HistoryPage />
            case 3:
                return <div>로그</div>
            default:
                return <div>컨텐츠를 찾을 수 없습니다</div>
        }
    }

    return (
        <LayoutWrapper>
            <Header 
                labels={tabLabels}
                value={currentTab} 
                onChange={handleTabChange}
            />
            <Main>
                {renderContent()}
            </Main>
        </LayoutWrapper>
    )
}

export default Layout;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
    height: 85vh;
    box-sizing: border-box;
`;
