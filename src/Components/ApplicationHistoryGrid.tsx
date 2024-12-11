import { DataGrid } from '@mui/x-data-grid';
import React from 'react';


const ApplicationHistoryGrid = () => {
    // 컬럼 정의
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'createdAt', headerName: '생성시간', width: 160 },
    { field: 'applicationName', headerName: '어플리케이션명', width: 150 },
    { field: 'type', headerName: '유형', width: 100 },
    { field: 'state', headerName: '상태', width: 100 },
    { field: 'creator', headerName: '생성자', width: 120 },
    { field: 'modifier', headerName: '수정자', width: 120 },
    { field: 'startTime', headerName: '시작시간', width: 160 },
    { field: 'endTime', headerName: '종료시간', width: 160 },
    { field: 'initialBoot', headerName: '초기기동', width: 120 },
    { field: 'currentBoot', headerName: '현재기동', width: 120 },
    { field: 'currentAddress', headerName: '현재기동address', width: 150 },
    { field: 'middleware', headerName: '미들웨어', width: 120 },
    { field: 'memorySize', headerName: '메모리 size', width: 120 },
    { field: 'jmx', headerName: 'JMX', width: 100 },
    { field: 'destinationName', headerName: 'Destination명', width: 150 },
    { field: 'partitionId', headerName: 'Partition ID', width: 120 },
  ];
  
  // 행 데이터
  const rows = [
    {
      id: 1,
      createdAt: '2024-01-20 10:00:00',
      applicationName: 'CS01_P',
      type: 'control',
      state: 'active',
      creator: 'admin',
      modifier: 'system',
      startTime: '2024-01-20 10:00:00',
      endTime: '2024-01-20 23:59:59',
      initialBoot: 'Y',
      currentBoot: 'Y',
      currentAddress: '192.168.1.100',
      middleware: 'Apache',
      memorySize: '1024MB',
      jmx: 'enabled',
      destinationName: 'DEST_01',
      partitionId: 'PART_001'
    },
    {
      id: 2,
      createdAt: '2024-01-20 10:00:00',
      applicationName: 'CS01_P',
      type: 'control',
      state: 'active',
      creator: 'admin',
      modifier: 'system',
      startTime: '2024-01-20 10:00:00',
      endTime: '2024-01-20 23:59:59',
      initialBoot: 'Y',
      currentBoot: 'Y',
      currentAddress: '192.168.1.100',
      middleware: 'Apache',
      memorySize: '1024MB',
      jmx: 'enabled',
      destinationName: 'DEST_01',
      partitionId: 'PART_001'
    },
  
  ];
    return (
        <div style={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </div>
      );
}

export default ApplicationHistoryGrid;