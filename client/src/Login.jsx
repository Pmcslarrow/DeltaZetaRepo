import NavBar from './Navbar'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './index.css'

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {email, password}
        const url = "http://localhost:3033/api/login"

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await rawResponse.json()

        if (response.status === "Success")
        {
            console.log("Success")
            localStorage.setItem("authenticationState", true);
            navigate("/dashboard")
        } else {
            return
        }
       
    }
    

    return (
        <>
            <NavBar title="Login"></NavBar>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                        <input type="text" value={email} id="emailID" onChange={handleEmailChange} required/>
                    <br />
                        <input type="password" value={password} id="passwordID" onChange={handlePasswordChange} required/>
                    <br />
                    <button type="submit" id="submitButton">Log In</button>
                </form>
            </div>
        </>
    );
}




export default Login