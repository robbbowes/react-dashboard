import './datatablelist.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/datatable/DataTable';

const DataTableList = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="list-container">
                <Navbar />
                <DataTable />
            </div>
        </div>
    );
};

export default DataTableList;