import React from 'react';
import { Table } from '../table/table';
import '../App.css';
import { MyModal } from '../modal/modal';


export const MainView = (props: any) => {

    const onChangeHandle = (event: any) => {
        console.log(event.target.files)
    }

    return (
        <div className="main-view">
            {/* <input type="file" accept=".pdf" onChange={onChangeHandle}></input> */}
            <Table/>
        </div>
    )
}