import React, { useState } from 'react';

export const Register = (props) =>{
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);

    }

    return (
    <div className='auth-form-container'>
        <h2>Register</h2>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="full name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
            <button>Sign up</button>
        </form>
        <button className='link-btn' onClick={() => props.onFromSwitch('login')}>Already have an account Login here.</button>
    </div>
    );
}
