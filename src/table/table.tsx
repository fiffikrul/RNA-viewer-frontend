import React from 'react';
import LiteMolPlugin from '../litemolPlugin/litemolPlugin';
import mainLogo from './kotbezciala.png';


interface Row {
    url: string;
    molecule_id: string;
    format: string;
    name: string;
    type: number;
};

export const Table = (props: any) => {
    let rows = [
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
        }
    ]

    const getJSXRows = (rows: Row[]) => {
        const JSXRows = rows.map((row, i) => {
            return (
                <tr>
                    <td><LiteMolPlugin url={row.url} id={i} format={row.format} molecule_id={row.molecule_id} /></td>
                    <td>{row.name}</td>
                    <td>{row.type}</td>
                </tr>
            );
        })
        return JSXRows;
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
                    {getJSXRows(rows)}
                </tbody>
                {/* <tr>
                    <td><img src={mainLogo} alt="" height="300" width="300" /></td>
                    <td>Maria Anders</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td><img src={mainLogo} alt="" height="300" width="300" /></td>
                    <td>Christina Berglund</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td><img src={mainLogo} alt="" height="300" width="300" /></td>
                    <td>Francisco Chang</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td><img src={mainLogo} alt="" height="300" width="300" /></td>
                    <td>Roland Mendel</td>
                    <td>44</td>
                </tr>
                <tr>
                    <td><img src={mainLogo} alt="" height="300" width="300" /></td>
                    <td>Helen Bennett</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><img src={mainLogo} alt="" height="300" width="300" /></td>
                    <td>Philip Cramer</td>
                    <td>99</td>
                </tr>
                <tr>
                    <td><img src={mainLogo} alt="" height="300" width="300" /></td>
                    <td>Yoshi Tannamuri</td>
                    <td>11</td>
                </tr> */}
            </table>
        </div>
    )
}
