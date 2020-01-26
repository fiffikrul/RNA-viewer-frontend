import React, { useState } from 'react';


interface PaginationProps {
    pages: number;
    handlePagination: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    const [activePage, setActivePage] = useState(0);

    const handlePage = (page: number) => {
        if (page > props.pages - 1 || page < 0)
            return 0;
        setActivePage(page);
        props.handlePagination(page);
    }

    const getJSXButtons = (pages: number) => {
        const JSXButtons = [];
        const beginning = Math.max(Math.min(activePage - 2, pages - 5), 0);
        const end = Math.min(pages, beginning + 5);
        for (let i = beginning; i < end; i++) {
            let classname = "pagination-button";
            if (activePage === i)
                classname += " active";
            JSXButtons.push(<button className={classname} onClick={() => handlePage(i)}>{i + 1}</button>);
        }

        return JSXButtons;
    }

    return (
        <div className="pagination">
            <button className="pagination-button" onClick={() => handlePage(activePage - 1)}><div className="previous-page" /></button>
            {getJSXButtons(props.pages)}
            <button className="pagination-button" onClick={() => handlePage(activePage + 1)}><div className="next-page" /></button>
        </div>
    )
}

export default Pagination;