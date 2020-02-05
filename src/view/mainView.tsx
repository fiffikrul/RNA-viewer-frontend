import React, { useState, useEffect } from 'react';
import Table, { Row } from '../table/table';
import Sidebar from '../navbar/sidebar';
import Pagination from '../table/pagination';
import Details from '../details/details';
import axios from 'axios';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import '../App.css';

export interface MainViewProps {
    sequence: string;
    type: string;
    minAngle: string;
    maxAngle: string;
    setSequence: (sequence: string) => void;
    setType: (type: string) => void;
    setMinAngle: (angle: string) => void;
    setMaxAngle: (angle: string) => void;
    handleAddComparison: (row: Row) => void;
}

var globalRows = [
    {
        url: 'https://files.rcsb.org/view/1ATV.cif',
        format: 'cif',
        molecule_id: '1ATV',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 1,
        id: 1
    },
    {
        url: 'https://files.rcsb.org/view/1ATW.cif',
        format: 'cif',
        molecule_id: '1ATW',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 1,
        id: 2
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 3,
        id: 3
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 4,
        id: 5
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 5,
        id: 6
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 6,
        id: 7
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 7,
        id: 4
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 8,
        id: 8
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 9,
        id: 9
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 10,
        id: 10
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 11,
        id: 11
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 12,
        id: 12
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 13,
        id: 13
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 14,
        id: 14
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 15,
        id: 15
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 16,
        id: 16
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 17,
        id: 17
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 18,
        id: 18
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 19,
        id: 19
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 20,
        id: 20
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 21,
        id: 21
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 22,
        id: 22
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 23,
        id: 23
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 24,
        id: 24
    }
]

export const MainView = (props: MainViewProps) => {
    const [rows, setRows] = useState(globalRows);
    const [activePage, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [isLoading, setLoading] = useState(false);
    const [renderedRows, setRenderedRows] = useState(rows.slice(0, pageSize));
    const [details, setDetails] = useState();
    const [isDetails, setIsDetails] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSearch = () => {
        setLoading(true);
        axios.get(`http://localhost:8080/filter?sequence=${props.sequence}&type=${props.type}&anglemin=${props.minAngle}&anglemax=${props.maxAngle}`, {})
            .then((response) => {
                setRows(response.data); // TODO to be decided!!!!!!
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }

    const handlePageSize = (newPageSize: number) => {
        if (newPageSize > pageSize) {
            setPage(0);
            handlePagination(0, newPageSize);
        } else {
            handlePagination(activePage, newPageSize);
        }
        setPageSize(newPageSize);
    }

    const handlePagination = (page: number, pageSize: number) => {
        setPage(page);
        const start = page * pageSize;
        const end = start + pageSize;
        setRenderedRows(rows.slice(start, end));
    }

    const addComparison = (id: number) => {
        props.handleAddComparison(renderedRows[id]);
    }

    const getDetails = (id: number) => {
        axios.get(`http://localhost:8080/details?id=${id}`, {})
            .then((response) => {
                setDetails(response.data); // TODO to be decided!!!!!!
            })
            .catch((err) => {
            });
    }

    const showDetails = (id: number) => {
        setIsDetails(true);
        disableBodyScroll(document.getElementById('root') as HTMLElement);
        // getDetails(id);
        setDetails(renderedRows[id]);
    }

    const closeModal = () => {
        setIsDetails(false);
        enableBodyScroll(document.getElementById('root') as HTMLElement);
    }

    return (
        <div className="main-view">
            <Sidebar
                handleSearch={handleSearch}
                disabled={isLoading}
                pageSize={pageSize}
                handlePageSize={handlePageSize}
                minAngle={props.minAngle}
                maxAngle={props.maxAngle}
                sequence={props.sequence}
                type={props.type}
                handleMinAngle={props.setMinAngle}
                handleMaxAngle={props.setMaxAngle}
                handleType={props.setType}
                handleSeq={props.setSequence}
            />
            <div className="main">
                {isDetails
                    ?
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <button onClick={() => closeModal()} className="close">
                                <div className="go-back" />
                            </button>
                            <Details details={details} />
                        </div>
                    </div>
                    : null
                }
                <Table
                    rows={renderedRows}
                    page={activePage}
                    addComparison={addComparison}
                    showDetails={showDetails}
                />
                <Pagination
                    pages={Math.ceil(rows.length / pageSize)}
                    activePage={activePage}
                    handlePagination={(page: number) => handlePagination(page, pageSize)}
                />
            </div>
        </div>
    )
}

export default MainView;