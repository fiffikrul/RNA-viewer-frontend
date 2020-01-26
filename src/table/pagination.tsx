import React from 'react';


interface PaginationProps {
    pages: number;
    handlePagination: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {

    console.log(props.pages);
    const handlePage = (page: number) => {
        props.handlePagination(page);
    }

    const getJSXButtons = (pages: number) => {
        const JSXButtons = [];
        for (let i = 0; i < pages; i++)
            JSXButtons.push(<button className="pagination-button" onClick={() => handlePage(i)}>{i + 1}</button>);
        return JSXButtons;
    }

    return (
        <div className="pagination">
            <button className="pagination-button previous-page"></button>
            {getJSXButtons(props.pages)}
            <button className="pagination-button next-page"></button>
        </div>
    )
}

export default Pagination;