import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Collapse, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState } from 'react';

const InfoTableList = () => {
    const [openStates, setOpenStates] = useState({
        SiteInfo: true,
        ApplicationInfo: true,
        UIServerInfo: true, 
    });

    const [siteInfo, setSiteInfo] = useState({
        siteName: '1',
        databaseTime: '2',
        localTime: '3',
        serverVersion: '4',
        clientVersion: '5'
    });

    const [applicationInfo, setApplicationInfo] = useState([{
        'name': 'CS01_P',
        'type': 'control',
        'state' : 'active'
    },
    {
        'name': 'DS01_P',
        'type': 'daemon',
        'state' : 'active'
    }
]);

    const [uiServerInfo, setUiServerInfo] = useState({

    });
    // 섹션별 데이터 매핑 객체
    const sectionDataMap = {
        SiteInfo: <SiteInfoTable siteInfo={siteInfo} />,
        ApplicationInfo: <ApplicationInfoTable applicationInfo={applicationInfo}/>,
        UIServerInfo: <></>
    };

    const toggleSection = (section: keyof typeof openStates) => {
        setOpenStates(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    }
    return (
        <>
            <TableContainer
                sx={{
                    MozBoxSizing: 'border-box',
                    width: '100%',
                    overflowX: 'hidden',
                }}
            >
                {Object.entries(openStates).map(([key, value]) => (
                    <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell 
                                colSpan={2} 
                                sx={{ 
                                    fontSize: '1.0rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    width: '100%'
                                }}
                                onClick={() => toggleSection(key as keyof typeof openStates)}
                            >
                                {key}
                                <IconButton size="small">
                                    {value ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                                <Collapse in={value} timeout="auto" unmountOnExit>
                                    <Table size="small">
                                        <TableBody>
                                            {sectionDataMap[key as keyof typeof sectionDataMap]}
                                        </TableBody>
                                    </Table>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                            </TableBody>
                        </Table>
                    ))}
            
            </TableContainer>
        </>
    )
}

interface SiteInfoTableProps {
    siteInfo: {
        siteName: string;
        databaseTime: string;
        localTime: string;
        serverVersion: string;
        clientVersion: string;
    }
}

const SiteInfoTable = ({siteInfo}: SiteInfoTableProps) => {
    return (
        <>
            {Object.entries(siteInfo).map(([key, value]) => (
                <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{value}</TableCell>
                </TableRow>
            ))}
        </>
    );
}

interface ApplicationInfoTableProps {
    applicationInfo: {
        name: string;
        type: string;
        state: string;
    }[]
}

const ApplicationInfoTable = ({applicationInfo}: ApplicationInfoTableProps) => {
    
    return (
        <>  
            <TableRow>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>App Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>유형</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>상태</TableCell>
            </TableRow>

            {applicationInfo.map((app) => (
                <TableRow key={app.name}>
                    <TableCell>{app.name}</TableCell>
                    <TableCell>{app.type}</TableCell>
                    <TableCell>{app.state}</TableCell>
                </TableRow>
            ))}
        </>
    );
}

export default InfoTableList;