import React from 'react';
import Pagesizer from './pagesizer';
import '../App.css'

interface SidebarProps {
    pageSize: number;
    handlePageSize: (pageSize: number) => void;
    handleSearch: () => void;
    disabled: boolean;
    minAngle: string[];
    maxAngle: string[];
    type: string;
    sequence: string;
    handleMinAngle: (angle: string[]) => void;
    handleMaxAngle: (angle: string[]) => void;
    handleType: (type: number) => void;
    handleSeq: (type: string) => void;
}

const Sidebar = (props: SidebarProps) => {

    return (
        <div className="sidebar">
            <div className="sidebar-block">
                <label>Page size:</label>
            </div>
            <div>
                <Pagesizer pageSize={props.pageSize} handlePageSize={props.handlePageSize} />
            </div>
            <div className="sidebar-block">
                <label>Angle:</label>
            </div>
            <div className="sidebar-block angle-block">
                <input className="sidebar-input" value={props.minAngle} onChange={(event: any) => props.handleMinAngle(event.target.value)} placeholder="from" />
                <input className="sidebar-input" value={props.maxAngle} onChange={(event: any) => props.handleMaxAngle(event.target.value)} placeholder="to" />
            </div>
            <div className="sidebar-block">
                <label>Sequence:</label>
            </div>
            <div className="sidebar-block sequence-block">
                <input value={props.sequence} onChange={(event: any) => props.handleSeq(event.target.value)} type="text" placeholder="dot-bracket or sequence" />
            </div>
            <div className="sidebar-block">
                <label>Junction type:</label>
            </div>
            <div className="sidebar-block type-block">
                <input value={props.type} onChange={(event: any) => props.handleType(event.target.value)} type="number" placeholder="number of connections" />
            </div>
            <div className="sidebar-block search-block">
                <button className="button" onClick={props.handleSearch} disabled={props.disabled}>Search</button>
            </div>
            <div className="logo-block">
                <div className="PP-logo" />
                <div className="IBCH-logo" />
            </div>
        </div>
    );
}

export default Sidebar;