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
    },
    {
        field: 'generalWorkflow',
        headerName: 'General Workflow',
        flex: 0.7,
        editable: true,
    },
    {
        field: 'specificWorkflow',
        headerName: 'Specific Workflow',
        flex: 0.7,
        editable: true,
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
];

export default COLUMNS;