import React from 'react';

export const LoginForm = (props: any) => {

    return (
        <div className="login-form">
            <div><label>Name/email:</label><input value={props.name} onChange={props.nameChange}/></div>
            <div><label>Password:</label><input type="password" value={props.password} onChange={props.passwordChange}/></div>
            <div className="button-wrap"><button className="button" onClick={props.submit} disabled={props.disabled}>Login</button></div>
        </div>
    )
}