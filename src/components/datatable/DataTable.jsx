import './datatable.scss';
import COLUMNS from './columns'
import DUMMY_DATA from './dummydata'

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const DataTable = () => {
    const [columnVisibilityModel, setColumnVisibilityModel] =
        React.useState({
            id: false,
            testLinkIdid: false,
            setToIgnore: false,
            comments: false,
            partialCoverageOnly: false,
            bugTicket: false,
            __check__: false
        });
    const [pageSize, setPageSize] = React.useState(10);

    const actionColumn = [
        {
            field: 'action', headerName: 'Action', flex: 0.5, renderCell: () => {
                return (
                    <div className="cell-action">
                        <div className="view-button">View </div>
                        <div className="delete-button">Delete </div>
                    </div>
                )
            }
        }
    ]


    return (
        <Box className="data-table" sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={DUMMY_DATA}
                columns={COLUMNS.concat(actionColumn)}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={(newModel) =>
                    setColumnVisibilityModel(newModel)
                }
                components={{
                    Toolbar: GridToolbar,
                }}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                pagination
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
};

export default DataTable;