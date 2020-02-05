import React from 'react';
import Pagesizer from './pagesizer';
import '../App.css'

interface EmptySidebarProps {
}

const EmptySidebarProps = (props: EmptySidebarProps) => {

    return (
        <div className="sidebar">
            <div className="logo-block">
                <div className="PP-logo" />
                <div className="IBCH-logo" />
            </div>
        </div>
    );
}

export default EmptySidebarProps;