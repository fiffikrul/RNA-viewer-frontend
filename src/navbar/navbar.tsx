import React, { useState } from 'react';
import '../App.css'

export const Navbar = (props: any) => {

    return (
        <div className="navbar">
            {!props.isLogged ? 
            <button onClick={props.handleLogin}>Login</button> : 
            <button onClick={props.handleLogout}>Logout</button>
            }
            <button>Contact</button>
            <button>Sponsors</button>
            {props.isLogged ?
            <button onClick={props.openUpload}>Add Structure</button>:
            null}
            <label className="loading">{props.isLoading ? 'Loading' : 'not loading'}</label>
            <label>logged in as: {props.user}</label>
        </div>
    )
}