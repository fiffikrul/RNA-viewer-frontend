import React from 'react';
import mainLogo from './kotbezciala.png';

export const Table = (props: any) => {

    return (
        <div>
            <table id="customers">
                <tr>
                    <th>3D</th>
                    <th>Name?</th>
                    <th>number</th>
                </tr>
                <tr>
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
                </tr>
            </table>
        </div>
    )
}
