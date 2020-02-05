import React from 'react';
import LiteMolPlugin from '../litemolPlugin/litemolPlugin';

interface DetailsProps {
    details: any;
}

export const Details = (props: DetailsProps) => {

    return (
        <div className="main-block">
            <div className="litemol-block">
                <LiteMolPlugin
                    url={props.details.url}
                    id={props.details.id}
                    format={props.details.format}
                    molecule_id={props.details.molecule_id}
                />
            </div>
        </div>
    )
}

export default Details;