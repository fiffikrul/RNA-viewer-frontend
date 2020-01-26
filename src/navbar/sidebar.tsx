import React from 'react';
import Pagesizer from './pagesizer';
import '../App.css'

interface SidebarProps {
    pageSize: number;
    setPageSize: (pageSize: number) => void;
    handleSearch: (page: number) => void;
    disabled: boolean;
}

const Sidebar = (props: SidebarProps) => {

    return (
        <div className="sidebar">
            <Pagesizer pageSize={props.pageSize} setPageSize={props.setPageSize} />
            <button className="button" onClick={() => props.handleSearch} disabled={props.disabled}>Search</button>
        </div>
    )
}

export default Sidebar;