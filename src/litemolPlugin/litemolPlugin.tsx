import React from 'react';
import LiteMol from 'litemol';

export interface LiteMolPluginProps {
    url: string;
    molecule_id: string;
    format: string;
    id: number;
};

class LiteMolPlugin extends React.Component<LiteMolPluginProps> {
    target: string;
    constructor(props: any) {
        super(props);
        this.target = `#litemol${this.props.id}`;
    }


    componentDidMount() {
        const plugin = LiteMol.Plugin.create({
            target: this.target,
            layoutState: {
                hideControls: true,
                collapsedControlsLayout: LiteMol.Bootstrap.Components.CollapsedControlsLayout.Landscape,
            },
            viewportBackground: '#F1F1F1'
        });
        plugin.loadMolecule({
            id: this.props.molecule_id,
            url: this.props.url,
            format: this.props.format
            // url: 'https://www.ebi.ac.uk/pdbe/static/entry/1tqn_updated.cif',
            // format: 'cif'
        });
    }

    render() {
        return <div className="litemol" id={this.target.substring(1)} />
    }
}

export default LiteMolPlugin;