import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    } 
    return (
        <div className="auth-form-container">
            <h2>Sign in</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
                <button>Sign in</button>
            </form>
            <button className='link-btn' onClick={() => props.onFromSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    );
}