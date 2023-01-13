import './datatable.scss';
import COLUMNS from './columns/columns'
import DUMMY_DATA from '../../dummydata/data'

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ScreenshotMonitorOutlined, VisibilityOutlined } from '@mui/icons-material';


const DataTable = ({ priority }) => {

    let dataByPrio = null;
    if (priority !== "all") {
        dataByPrio = DUMMY_DATA.filter(x => x.testPriority.toLowerCase() === priority)
    } else {
        dataByPrio = DUMMY_DATA
    }

        const [columnVisibilityModel, setColumnVisibilityModel] =
            React.useState({
                id: false,
                testLinkId: false,
                testPackage: false,
                setToIgnore: false,
                comments: false,
                partialCoverageOnly: false,
                bugTicket: false,
                __check__: false
            });

    const [pageSize, setPageSize] = React.useState(50);

    const actionColumn = [
        {
            field: 'action', headerName: 'Action', flex: 0.5, filterable: false, hideable: false, renderCell: () => {
                return (
                    <div className="cell-action">
                        <div className="view-button">
                            <VisibilityOutlined />
                        </div>
                        <div className="view-button" onClick={() => window.open('implement me', '_blank', 'noreferrer')}>
                            <ScreenshotMonitorOutlined />
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <Box className="data-table">
            <DataGrid
                className="datagrid"
                rows={dataByPrio}
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