import './datatablelist.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/datatable/DataTable';
import React from 'react'

interface DataTableListProps {
    priority: string
}

const DataTableList = ({ priority }: DataTableListProps) => {
    return (
        <div className="list">
            <Sidebar />
            <div className="list-container">
                <Navbar />
                <DataTable priority={priority} />
            </div>
        </div>
    );
};

export default DataTableList;