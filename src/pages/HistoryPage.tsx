import styled from "@emotion/styled";
import React, { useState } from "react";
import ApplicationHistoryGrid from "../Components/ApplicationHistoryGrid";


//이력정보 페이지
const HistoryPage = () => {
    const [currentTab, clickTab] = useState(0);

    const menuArr = [
      { name: '어플리케이션', content: <ApplicationHistoryGrid /> },
      { name: '알람', content: 'Tab menu TWO' },
      { name: '수송', content: 'Tab menu THREE' },
      { name: '차량', content: 'Vehicle' },
      
    ];
  
    const selectMenuHandler = (index) => {
      clickTab(index);
    };
  
    return (
      <>
        <Container>
          <TabMenu>
            {menuArr.map((el,index) => (
                <li className={index === currentTab ? "submenu focused" : "submenu" }
                onClick={() => selectMenuHandler(index)}>{el.name}</li>
              ))}
          </TabMenu>
          <Desc>
            {menuArr[currentTab].content}
          </Desc>
        </Container>
      </>
    );
}

export default HistoryPage;

const Container = styled.div`
    height: 100%;
    border: 1px solid black;
    
`

const Desc = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
`;

const TabMenu = styled.div`
  background-color: #dcdcdc;
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border-radius: 10px 10px 0px 0px;


  .submenu {
    display: flex;
    width: calc(100% / 4);
    padding: 15px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
    user-select: none;
    
    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }

  .focused {
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
    
    &:hover {
      background-color: rgb(255,255,255);
    }
  }

  & div.desc {
    text-align: center;
  }
`;
