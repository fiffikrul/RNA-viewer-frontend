import React from 'react';
import { UploadButton } from './uploadButton';

export const UploadForm = (props: any) => {
    return (
        <div className="upload-form">
            <div>
                <label>XML File:</label>
                <UploadButton />
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