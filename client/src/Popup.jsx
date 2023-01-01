import {React, useState} from 'react'
import axios from 'axios'
import "./index.css"


async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}



function FormInput(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );


    // Posting new user data to database
    async function handleSubmit(event) {
        event.preventDefault()
        let pass = await sha256(password)
        console.log(pass)
        let data = {
            name,
            email,
            pass
        }
        //Uses regex to validate email
        if (validEmail.test(email))
        {

            axios.post("http://localhost:3033/api/databaseUsers", data)
                .then((resp) => {
                    if (resp.data === "Added a new user")
                    {
                        props.getUsers()
                        props.setButtonState(!props.newUserButtonIsClicked)
                    }
                })
                .catch((err) => {console.log("User failed to add [-]")})
            props.getUsers()
        }
      }
    
    return (
        <form onSubmit={handleSubmit}>
            <div id="formWrapper">
                    Name:
                    <input type="text" className='nameClass' placeholder="Name" onChange={(event) => {setName(event.target.value)}} required></input>
                    Email:
                    <input type="text" className='emailClass' placeholder="Email" onChange={(event) => {setEmail(event.target.value)}} required></input>
                    Password:
                    <input type="text" className='passwordClass' placeholder="Password" onChange={(event) => {setPassword(event.target.value)}} required></input>

                    <input type="submit" id="formSubmitButton"  value="Submit"/>
            </div>
        </form>
    );
  }

function Popup(props) {
    return (
        <div className='popWrapper'>
            <div className='box'>
                <FormInput getUsers={props.getUsers} setButtonState={props.setButtonState} newUserButtonIsClicked={props.newUserButtonIsClicked}></FormInput>
            </div>
        </div>
    )
}

export default Popup