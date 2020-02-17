import React from 'react';
import '../App.css'

interface EmptySidebarProps {
}

const EmptySidebarProps = (props: EmptySidebarProps) => {

    return (
        <div className="sidebar">
            <div className="distance"></div>
            <div className="logo-block">
                <a href="https://www.put.poznan.pl/">
                    <div className="PP-logo" />
                </a>
                <a href="https://www.ibch.poznan.pl/pl/top-pl/home/">
                    <div className="IBCH-logo" />
                </a>
            </div>
        </div>
    );
}

export default EmptySidebarProps;