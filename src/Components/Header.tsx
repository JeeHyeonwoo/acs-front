import React from 'react';
import { AppBar, Tabs, Tab, Toolbar } from '@mui/material';

interface HeaderProps {
    labels: string[];
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const Header: React.FC<HeaderProps> = ({ labels, value, onChange }) => { 

    return (
        <AppBar position="static" sx={{ backgroundColor: '#283046' }}>
            <Toolbar>
                <Tabs value={value} onChange={onChange} textColor="inherit">
                    {labels.map((label, index) => (
                        <Tab key={index} label={label} />
                    ))}
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
