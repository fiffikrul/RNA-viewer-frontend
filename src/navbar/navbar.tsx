import React from 'react';
import '../App.css'

const Navbar = (props: any) => {

    return (
        <div className="navbar">
            <div className="main-logo" />
            <div className="navbuttons">
                <button onClick={props.handleMain}>Main Page</button>
                <button onClick={props.handleStats}>Statistics</button>
                <button>Contact</button>
                <button>Sponsors</button>
            </div>
        </div>
    )
}

export default Navbar;