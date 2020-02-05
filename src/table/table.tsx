import React from 'react';
import LiteMolPlugin from '../litemolPlugin/litemolPlugin';


interface TableProps {
    rows: Row[];
    page: number;
    addComparison: (id: number) => void;
    showDetails: (id: number) => void;
}

export interface Row {
    url: string;
    molecule_id: string;
    format: string;
    sequence: string;
    type: number;
    angle: string;
    id: number;
};

export const Table = (props: TableProps) => {

    const choseRow = (id: number) => {
        props.showDetails(id);
    }

    const getJSXRows = (rows: Row[]) => {
        if (typeof (rows) !== 'undefined') {
            const JSXRows = rows.map((row, i) => {
                return (
                    <tr>
                        <td className="litemol-column">
                            <LiteMolPlugin url={row.url} id={i} format={row.format} molecule_id={row.molecule_id} />
                        </td>
                        <td>{row.sequence}</td>
                        <td>{row.type}</td>
                        <td>{row.angle}</td>
                        <td>
                            <div className="sidebar-block search-block">
                                <button onClick={() => props.addComparison(i)} className="button">Add</button>
                            </div>
                        </td>
                        <td>
                            <div className="sidebar-block search-block">
                                <button onClick={() => choseRow(row.id)} className="button">Details</button>
                            </div>
                        </td>
                    </tr>
                );
            })
            return JSXRows;
        }
        return null;
    }

    return (
        <div>
            <table id="structures">
                <thead>
                    <tr>
                        <th>3D</th>
                        <th>Sequence</th>
                        <th>Junction type</th>
                        <th>Angle</th>
                        <th>Compare</th>
                        <th>Details</th>
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