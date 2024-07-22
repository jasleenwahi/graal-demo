import React, { useState, useEffect } from 'react';
import WorkerService from '../services/workerservice';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const defaultColDef = {
    width: 200,
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
};

const columnDefs = [
    { headerName: 'Name', field: 'name', filter: true },
    { headerName: 'Description', field: 'description', filter: true },
    { headerName: 'Category', field: 'category', filter: true },
    { headerName: 'Per-Day Wage', field: 'perDayWage', filter: true },
    { headerName: 'Days Available', field: 'days', filter: true },
];

const WorkersList = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
      WorkerService.getWorkersByCategory().then(response => {
        setWorkers(response.data);
      });
    }
  );

  return (
    <div>

      <div className="ag-theme-quartz" style={{ height: 600, width: '100%' }}>
        <AgGridReact
          rowData={workers}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          domLayout='autoHeight'
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default WorkersList;
