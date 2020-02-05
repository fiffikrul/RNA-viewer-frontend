import React, { useEffect } from 'react';
import '../App.css';
import Compare, { Row } from '../table/compare';
import Stats from '../table/stats';
import EmptySidebar from '../navbar/emptySidebar';

interface StatsViewProps {
    compare: boolean;
    comparison: Row[];
}

export const StatsView = (props: StatsViewProps) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="main-view main">
            <EmptySidebar />
            {props.compare ? <Compare rows={props.comparison} /> : <Stats />}
            <div className="filler"></div>
        </div>
    )
}

export default StatsView;