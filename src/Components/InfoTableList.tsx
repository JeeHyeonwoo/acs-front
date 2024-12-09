import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Collapse, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState } from 'react';

const InfoTableList = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <TableContainer
                sx={{
                    MozBoxSizing: 'border-box',
                    width: '100%',
                    overflowX: 'hidden',
                }}
            >
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell 
                                colSpan={2} 
                                sx={{ 
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    width: '100%'
                                }}
                                onClick={() => setOpen(!open)}
                            >
                                Site Info
                                <IconButton size="small">
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <Table size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Site Name</TableCell>
                                                <TableCell>1</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Database Time</TableCell>
                                                <TableCell>2</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Local Time</TableCell>
                                                <TableCell>3</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Server Version</TableCell>
                                                <TableCell>4</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Client Version</TableCell>
                                                <TableCell>5</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default InfoTableList;