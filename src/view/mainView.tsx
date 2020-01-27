import React, { useState } from 'react';
import Table, { Row } from '../table/table';
import Sidebar from '../navbar/sidebar';
import Pagination from '../table/pagination';
import axios from 'axios';
import '../App.css';

interface MainViewProps {

}

var globalRows = [
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 1
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 2
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 3
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 4
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 5
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 6
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 7
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 8
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 9
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 10
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 11
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 12
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 13
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 14
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 15
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 16
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 17
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 18
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 19
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 20
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 21
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 22
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 23
    },
    {
        url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
        format: 'cif',
        molecule_id: '1tqn',
        name: 'Stephe',
        type: 24
    }
]

export const MainView = (props: MainViewProps) => {
    const [rows, setRows] = useState(globalRows);
    const [activePage, setPage] = useState(0);
    const [sequence, setSequence] = useState('');
    const [type, setType] = useState();
    const [minAngle, setMinAngle] = useState();
    const [maxAngle, setMaxAngle] = useState();
    const [pageSize, setPageSize] = useState(2);
    const [isLoading, setLoading] = useState(false);
    const [renderedRows, setRenderedRows] = useState(rows.slice(0, pageSize));


    const handleSearch = () => {
        setLoading(true);
        axios.get(`http://localhost:8080/login?sequence=${sequence}&type=${type}&anglemin=${minAngle}&anglemax=${maxAngle}`, {})
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

    // console.log(`angle: ${minAngle} - ${maxAngle}\nsequence: ${sequence}\ntype: ${type}`)

    return (
        <div className="main-view">
            <Sidebar handleSearch={handleSearch} disabled={isLoading} pageSize={pageSize} handlePageSize={handlePageSize} minAngle={minAngle} maxAngle={maxAngle} sequence={sequence} type={type} handleMinAngle={setMinAngle} handleMaxAngle={setMaxAngle} handleType={setType} handleSeq={setSequence} />
            <div className="main">
                <Table rows={renderedRows} page={activePage} />
                <Pagination pages={Math.ceil(rows.length / pageSize)} activePage={activePage} handlePagination={(page: number) => handlePagination(page, pageSize)} />
            </div>
        </div>
    )
}

export default MainView;