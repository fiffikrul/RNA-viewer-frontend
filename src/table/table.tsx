import React from 'react';
import LiteMolPlugin from '../litemolPlugin/litemolPlugin';


interface TableProps {
    rows: Row[];
    page: number;
}

export interface Row {
    url: string;
    molecule_id: string;
    format: string;
    name: string;
    type: number;
};

export const Table = (props: TableProps) => {

    const choseRow = (row: Row) => {
        console.log(row)
    }

    const getJSXRows = (rows: Row[]) => {
        if (typeof(rows) !== 'undefined') {
            const JSXRows = rows.map((row, i) => {
                return (
                    <tr onClick={() => choseRow(row)}>
                        <td><LiteMolPlugin url={row.url} id={i} format={row.format} molecule_id={row.molecule_id} /></td>
                        <td>{row.name}</td>
                        <td>{row.type}</td>
                    </tr>
                );
            })
            return JSXRows;
        }
        return null;
    }

    return (
        <div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>3D</th>
                        <th>Name?</th>
                        <th>number</th>
                    </tr>
                </thead>
                <tbody>
                    {getJSXRows(props.rows)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;