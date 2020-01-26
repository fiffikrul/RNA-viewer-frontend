import React, { useState } from 'react';
import '../App.css';

interface PagesizerProps {
    pageSize: number;
    setPageSize: (pageSize: number) => void;
}

const Pagesizer = (props: PagesizerProps) => {

    const calculatePageSize = (pageSize: number) => {
        const minMaxPageSize = Math.max(5, Math.min(pageSize, 50));
        return Math.ceil(minMaxPageSize / 5) * 5;
    }

    const handleBlur = (pageSize: number) => {
        const calculatedPageSize = calculatePageSize(pageSize);
        props.setPageSize(calculatedPageSize);
    }

    const handleChange = (pageSize: number) => {
        props.setPageSize(pageSize);
    }

    return (
        <div className="pagesizer">
            <button onClick={() => handleBlur(props.pageSize - 5)}><div className="previous-page small-arrow"></div></button>
            <input type="number" value={props.pageSize} onChange={(event: any) => handleChange(event.target.value)} onBlur={(event: any) => handleBlur(event.target.value)} />
            <button onClick={() => handleBlur(props.pageSize + 5)}><div className="next-page small-arrow"></div></button>
        </div>
    );
}

export default Pagesizer;