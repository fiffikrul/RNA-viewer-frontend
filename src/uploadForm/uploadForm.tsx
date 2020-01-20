import React from 'react';
import { UploadButton } from './uploadButton';

export const UploadForm = (props: any) => {

    const onChange = (event: any) => {
        console.log(event.target.files[0]);
    }

    return (
        <div className="upload-form">
            <div>
                <label>XML File:</label>
                <UploadButton onChange={onChange} />
            </div>
            <div>
                <label>PDB file:</label>
                <UploadButton />
            </div>
            <div className="button-wrap">
                <button onClick={props.submit} disabled={props.disabled}>Upload</button>
            </div>

        </div>
    )
}