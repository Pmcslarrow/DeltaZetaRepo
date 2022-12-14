import NavBar from './Navbar'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import './index.css'


function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false)   // SWITCH THIS BACK LATER TO FALSE
    const navigate = useNavigate();

    function validUserInputs(data)
    {
        const reg = new RegExp(/[<>&'"\\/#%=*+{}]/)
        if (reg.test(data.email) || reg.test(data.password))
        {
            return false
        }
        return true
    }


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

        if (validUserInputs(data))
        {
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
                setAuth(true)
            } else {
                return
            }
        } else {
            console.log("Invalid User Input")
        }

        
       
    }
    

    return (
        <>
        {
            auth ? (
                <Dashboard/>
            ) : (
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
            )
        }
        </>
    );
}




export default Login