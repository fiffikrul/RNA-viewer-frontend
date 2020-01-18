import React from 'react';

export const LoginForm = (props: any) => {

    return (
        <div className="login-form">
            <div>
                {/* <label>Name/email:</label> */}
                <input placeholder="name/email" value={props.name} onChange={props.nameChange} />
            </div>
            <div>
                {/* <label>Password:</label> */}
                <input type="password" placeholder="password" value={props.password} onChange={props.passwordChange} />
            </div>
            <div>
                <button onClick={props.submit} disabled={props.disabled}>Login</button>
            </div>
        </div>
    )
}