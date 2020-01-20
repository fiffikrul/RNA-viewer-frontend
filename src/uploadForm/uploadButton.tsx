import React from 'react';


export const UploadButton = (props: any) => {
    return (
        <input type="file" accept={props.accept} onChange={props.onChange}></input>
    )
}