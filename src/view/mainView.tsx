import React from 'react';
import { Table } from '../table/table';
import '../App.css';


export const MainView = (props: any) => {

    const onChangeHandle = (event: any) => {
        console.log(event.target.files)
    }

    return (
        <div className="main-view">
            <Table />
        </div>
    )
}