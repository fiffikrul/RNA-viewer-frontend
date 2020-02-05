import React from 'react';
import LiteMolPlugin from '../litemolPlugin/litemolPlugin';
import { Row } from './table';


interface CompareProps {
    rows: Row[];
    goToMain: () => void;
}

export const Compare = (props: CompareProps) => {

    const getJSXRows = (rows: Row[]) => {
        if (typeof (rows) !== 'undefined') {
            const JSXRows: any = [];
            JSXRows.push(
                <tr>
                    <td>3D</td>
                    <td><LiteMolPlugin url={rows[0].url} id={0} format={rows[0].format} molecule_id={rows[0].molecule_id} /></td>
                    <td><LiteMolPlugin url={rows[1].url} id={1} format={rows[1].format} molecule_id={rows[1].molecule_id} /></td>
                </tr>
            );
            JSXRows.push(
                <tr>
                    <td>Type</td>
                    <td>{rows[0].type}-way junction</td>
                    <td>{rows[1].type}-way junction</td>
                </tr>
            );
            JSXRows.push(
                <tr>
                    <td>Sequence</td>
                    <td>{rows[0].sequence}</td>
                    <td>{rows[1].sequence}</td>
                </tr>
            );
            JSXRows.push(
                <tr>
                    <td>Angle</td>
                    <td>{rows[0].angle}</td>
                    <td>{rows[1].angle}</td>
                </tr>
            );
            JSXRows.push(
                <tr>
                    <td>Download</td>
                    <td>
                        <div className="sidebar-block search-block">
                            <button className="button">Download</button>
                        </div>
                    </td>
                    <td>
                        <div className="sidebar-block search-block">
                            <button className="button">Download</button>
                        </div>
                    </td>
                </tr>
            );
            return JSXRows;
        }
        return null;
    }

    return (
        <div>
            {
                props.rows && props.rows.length == 2 ?
                <table id="compare">
                    <thead>
                        <tr>
                            <th>Structure name:</th>
                            <th>{props.rows[0].molecule_id}</th>
                            <th>{props.rows[1].molecule_id}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getJSXRows(props.rows)}
                    </tbody>
                </table>
                : <button onClick={props.goToMain} className="center-box">Choose structures to compare</button>
            }
        </div>
    )
}

export default Compare;