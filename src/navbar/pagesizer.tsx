import React, { useState } from 'react';
import '../App.css';

interface PagesizerProps {
    pageSize: number;
    handlePageSize: (pageSize: number) => void;
}

const Pagesizer = (props: PagesizerProps) => {
    const [size, setSize] = useState(props.pageSize);

    const calculatePageSize = (pageSize: number) => {
        const minMaxPageSize = Math.max(5, Math.min(pageSize, 50));
        return Math.ceil(minMaxPageSize / 5) * 5;
    }

    const handleBlur = (pageSize: number) => {
        const calculatedPageSize = calculatePageSize(pageSize);
        setSize(calculatedPageSize);
        props.handlePageSize(calculatedPageSize);
    }

    const handleChange = (pageSize: number) => {
        setSize(pageSize);
    }

    return (
        <div className="pagesizer">
            <button onClick={() => handleBlur(props.pageSize - 5)}><div className="previous-page-white"></div></button>
            <input type="number" value={size} onChange={(event: any) => handleChange(event.target.value)} onBlur={(event: any) => handleBlur(event.target.value)} />
            <button onClick={() => handleBlur(props.pageSize + 5)}><div className="next-page-white"></div></button>
        </div>
    );
}

export default Pagesizer;