import React from 'react';
import LiteMolPlugin from '../litemolPlugin/litemolPlugin';
import XMLViewer from 'react-xml-viewer';

const globalXml = [`
<?xml version="1.0" encoding="UTF-8"?>
<File>
	<Structure>
		<Name>1B23</Name>
		<Chain>
			<Name>R</Name>
			<Method>
				<Name>DSSR_BASIC</Name>
				<Junction>
					<Name>4-way junction</Name>
					<Filename>1B23_DSSR_BASIC_R_4-way_junction_6_65_9_24_26_42_48_64_.pdb</Filename>
					<Connectors>
						<Length>1</Length>
						<Connector>
							<Id>0</Id>
							<Range>[6, 9]</Range>
							<Length>2</Length>
							<Sequence>UcAA</Sequence>
							<DotBracketNotation>(..(</DotBracketNotation>
							<EulerAngle>
								<Angle>166.9172988458974</Angle>
								<Angle>152.54569826692088</Angle>
								<Angle>147.5788318419149</Angle>
							</EulerAngle>
							<PlanarAngle>155.25481175971157</PlanarAngle>
						</Connector>
						<Connector>
							<Id>1</Id>
							<Range>[23, 25]</Range>
							<Length>1</Length>
							<Sequence>UAG</Sequence>
							<DotBracketNotation>).(</DotBracketNotation>
							<EulerAngle>
								<Angle>27.927367475915474</Angle>
								<Angle>14.88177567494621</Angle>
								<Angle>1.6939574531615615</Angle>
							</EulerAngle>
							<PlanarAngle>28.89014726487576</PlanarAngle>
						</Connector>
						<Connector>
							<Id>2</Id>
							<Range>[41, 46]</Range>
							<Length>4</Length>
							<Sequence>UCUAGU</Sequence>
							<DotBracketNotation>)....(</DotBracketNotation>
							<EulerAngle>
								<Angle>179.47040955330144</Angle>
								<Angle>157.19069092881756</Angle>
								<Angle>141.22755571155986</Angle>
							</EulerAngle>
							<PlanarAngle>157.8830154722051</PlanarAngle>
						</Connector>
						<Connector>
							<Id>3</Id>
							<Range>[62, 63]</Range>
							<Length>0</Length>
							<Sequence>AA</Sequence>
							<DotBracketNotation>))</DotBracketNotation>
							<EulerAngle>
								<Angle>14.315075875114312</Angle>
								<Angle>35.38183512931533</Angle>
								<Angle>72.8875698996864</Angle>
							</EulerAngle>
							<PlanarAngle>36.414276262694415</PlanarAngle>
						</Connector>
					</Connectors>
				</Junction>
			</Method>
		</Chain>
    </Structure>
</File>`]
interface DetailsProps {
    details: any;
}

export const Details = (props: DetailsProps) => {

    return (
        <div className="main-block">
            <div className="litemol-block">
                <div className="title-block">3D interactive view</div>
                <LiteMolPlugin
                    url={props.details.url}
                    id={props.details.id}
                    format={props.details.format}
                    molecule_id={props.details.molecule_id}
                />
            </div>
            <div className="varna-block">
                <div className="title-block">2D view</div>
                <div className="varna-image" />
            </div>
            <div className="details-text">
                {/* {globalDetailsExample[0]} */}
                <XMLViewer xml={globalXml} />
            </div>
        </div>
    )
}

export default Details;