import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const COLUMNS = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.3
    },
    {
        field: 'testLinkIdid',
        headerName: 'TestLInk Id',
        flex: 0.3
    },
    {
        field: 'generalWorkflow',
        headerName: 'General Workflow',
        flex: 0.5,
        editable: true,
    },
    {
        field: 'specificWorkflow',
        headerName: 'Specific Workflow',
        flex: 0.5,
        editable: true,
    },
    {
        field: 'testPackage',
        headerName: 'Test Package',
        flex: 1,
        editable: true,
    },
    {
        field: 'testClass',
        headerName: 'Test Class',
        flex: 1,
        editable: true,
    },
    {
        field: 'testName',
        headerName: 'Test Name',
        flex: 1,
        editable: true,
    },
    {
        field: 'testPriority',
        headerName: 'Priority',
        flex: 0.3,
        editable: true,
        renderCell: (params) => {
            return (
                <div className={`priority ${params.row.testPriority}`}>
                    {params.row.testPriority}
                </div>
            )
        }
    },
    {
        field: 'setToIgnore',
        headerName: 'Set To ignore',
        type: 'boolean',
        flex: 0.3,
        editable: true,
    },
    {
        field: 'comments',
        headerName: 'Comments',
        flex: 0.3,
        editable: true,
    },
    {
        field: 'partialCoverageOnly',
        headerName: 'Partial Coverage Only',
        type: 'boolean',
        flex: 0.3,
        editable: true,
    },
    {
        field: 'bugTicket',
        headerName: 'Bug Ticket',
        flex: 0.5,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        flex: 0.5,
        editable: true,
        renderCell: (params) => {
            if (params.row.status) {
                return params.row.status.map(o => (
                    <div key={`${params.row.id}${o.user}`} className={`status ${o.verdict}`}>
                        {o.user}{getStatusIcon(o.verdict)}
                    </div>
                ));
            }
            return null;
        }
    }
];

const getStatusIcon = (verdict) => {
    if (verdict === "Ok") {
        return <CheckCircleOutlineIcon fontSize='13px' />
    } else if (verdict === "Unsure") {
        return <HelpOutlineIcon fontSize='13px' />
    } else if (verdict === "Bug") {
        return <WarningAmberIcon fontSize='13px' />
    } else {
        return null
    }
}

export default COLUMNS;