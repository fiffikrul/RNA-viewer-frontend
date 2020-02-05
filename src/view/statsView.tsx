import React from 'react';
import '../App.css';
import Compare from '../table/compare';
import Stats from '../table/stats';

var globalRows = [
    {
        url: 'https://files.rcsb.org/view/1ATV.cif',
        format: 'cif',
        molecule_id: '1ATV',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 2
    },
    {
        url: 'https://files.rcsb.org/view/1ATW.cif',
        format: 'cif',
        molecule_id: '1ATW',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 2
    }
]

interface StatsViewProps {
    compare: boolean;
}

export const StatsView = (props: StatsViewProps) => {

    return (
        <div className="main-view">
            {props.compare ? <Compare rows={globalRows} /> : <Stats />}
            <div className="filler"></div>
        </div>
    )
}

export default StatsView;