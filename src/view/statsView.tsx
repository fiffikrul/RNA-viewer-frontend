import React, { useEffect } from 'react';
import '../App.css';
import Compare from '../table/compare';
import Stats from '../table/stats';
import EmptySidebar from '../navbar/emptySidebar';
import { Row } from '../table/table';

interface StatsViewProps {
    compare: boolean;
    comparison: Row[];
    goToMain: () => void;
}

export const StatsView = (props: StatsViewProps) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main-view main">
            <EmptySidebar />
            {props.compare ? <Compare rows={props.comparison} goToMain={props.goToMain} /> : <Stats />}
        </div>
    )
}

export default StatsView;