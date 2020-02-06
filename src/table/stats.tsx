import React, { useState } from 'react';
import axios from 'axios';


const globalStats = [100, 0, 73, 15, 0, 12];

interface StatsProps {

}

export const Stats = (props: StatsProps) => {
    const [stats, setStats] = useState(globalStats);

    const getStats = () => {
        axios.get(`http://localhost:8080/stats`, {})
            .then((response) => {
                setStats(response.data);
            })
            .catch((err) => {

            });
    }

    const getJSXColumns = () => {
        getStats();
        const JSXColumns: any = [];
        JSXColumns.push(<th>All junctions</th>);
        if (typeof (stats) != 'undefined') {
            for (let i = 1; i < stats.length; i++) {
                if (stats[i] > 0)
                    JSXColumns.push(<th>{i}-way junctions</th>);
            }
        }
        return JSXColumns;
    }

    const getJSXRows = () => {
        if (typeof (stats) != 'undefined') {
            const JSXRows = stats.map((stat: number, i) => {
                if (stats[i] > 0)
                    return (<td>{stat}</td>);
            });
            return JSXRows;
        } else {
            return null;
        }
    }

    return (
        <div>
            <div className="stats-spacer"></div>
            <table id="stats">
                <thead>
                    <tr>
                        {getJSXColumns()}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {getJSXRows()}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Stats;