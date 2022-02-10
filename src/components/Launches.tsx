import React, { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Alert from '@mui/material/Alert';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useAppSelector, useAppDispatch } from '../hooks/hook';
import { fetchLaunchesAsync } from '../reducers/launchSlice';
import ViewRocketInfoCellRenderer from './cellRenderers/ViewRocketInfoCellRenderer';

const dateFormatter = (params: any) => {
    return new Date(params.value).toDateString();
};

export const Launches = () => {
    const { entities, error } = useAppSelector(state => state.launches);
    const dispatch = useAppDispatch();
    const [columnDefs] = useState([
        { field: "name", sortable: true, filter: 'agTextColumnFilter', headerName: 'Name' },
        { field: "date_utc", sortable: true, filter: false, headerName: 'Date', valueFormatter: dateFormatter },
        { field: "details", sortable: true, filter: 'agTextColumnFilter', headerName: 'Details' },
        { field: 'View', cellRenderer: ViewRocketInfoCellRenderer }
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 90,
            resizable: true,
        };
    }, []);
    useEffect(() => {
        dispatch(fetchLaunchesAsync());
    }, [dispatch]);
    return (
        <div>
            <h2 className='text-centre'>SpaceX last 50 Launches</h2>
            {error && <Alert severity="error">{error.error}</Alert>}
            <div className="ag-theme-alpine grid">
                {entities && entities.length &&
                    <AgGridReact
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        rowData={entities}
                        pagination={true}
                        paginationPageSize={10}
                        cacheBlockSize={10}
                        animateRows={true}
                    />
                }
            </div>
        </div>
    )
}
