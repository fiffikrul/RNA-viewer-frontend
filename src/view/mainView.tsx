import React, { useState } from 'react';
import Table, { Row } from '../table/table';
import Pagination from '../table/pagination';
import '../App.css';

interface MainViewProps {
    rows: Row[];
}

export const MainView = (props: MainViewProps) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);

    const handlePagination = (page: number) => {
        setPage(page);
    }

    return (
        <div className="main-view">
            <div className="sidebar">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <div className="main">
                <Table rows={props.rows} page={page}/>
                <Pagination pages={Math.ceil(props.rows.length / pageSize)} handlePagination={handlePagination}/>
            </div>
        </div>
    )
}

export default MainView;