import React from 'react';
import '../App.css';
import Compare from '../table/compare';

var globalRows = [
    {
        url: 'https://files.rcsb.org/view/1ATV.cif',
        format: 'cif',
        molecule_id: '1ATV',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 1
    },
    {
        url: 'https://files.rcsb.org/view/1ATW.cif',
        format: 'cif',
        molecule_id: '1ATW',
        sequence: "AAAAAGGUUGA",
        angle: "",
        type: 1
    }
]

interface StatsViewProps {
    
}

export const StatsView = (props: StatsViewProps) => {

    return (
        <div className="main-view">
            <Compare rows={globalRows}/>
            <div className="filler"></div>
        </div>
    )
}

export default StatsView;