import NavBar from './Navbar'
import { useEffect, useState, React } from 'react'
import './index.css';
import Popup from "./Popup"
import axios from 'axios';

/* 
#####################################################################################
Calendar System Component
#####################################################################################
*/
function CalendarSystem(){
  const [formData, setFormData] = useState({})

  function validUserInputs(data)
  {
    const reg = new RegExp(/[<>&'"\\/!@#$%=*+{}]/)
    if (reg.test(data['event']) || reg.test(data['timezone']))
    {
      return false
    }
    return true
  }

  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = formData
    const url = "localhost:3033/api/"
    if ( validUserInputs(data) )
    {
      console.log("START WORKING HERE INSIDE dashboard.jsx")
    } else {
      console.log("Invalid Input (Don't use any characters other than letters)")
    }
    
  }

  return (
    <>
    <div className="App">
        <h1>Calendar System:</h1>

        <form onSubmit={handleSubmit}>
          <div id="calendarWrapper">
              <label>Event:</label>
                  <input type="text" name="event" placeholder="Event name" onChange={handleChange} required/>
              <label>Date:</label>
                  <input type="date" name="date" placeholder="Date" onChange={handleChange} required/>
              <label>Start time:</label>
                  <input type="time" name="startTime" placeholder="Start time" onChange={handleChange} required/>
              <label>End time:</label>
                  <input type="time" name="endTime" placeholder="End time" onChange={handleChange} required/>
              <label>Timezone:</label>
                  <input type="text" name="timezone" placeholder="Timezone" onChange={handleChange} required/>

              <button type="submit">Submit</button>
          </div>
        </form>
    </div>
    </>
  )
}

/* 
#####################################################################################
Image Selector Component
#####################################################################################
*/
function ImageSelector(){
  return (
    <div className="App">
        <h1>Image Selector:</h1>
    </div>
  )
}


/* 
#####################################################################################
Dashboard Component
#####################################################################################
*/
function Dashboard() {
  const [userList, setUsers] = useState([])
  const [newUserButtonIsClicked, setButtonState] = useState(false)

  // Gets the users from the API and then sets the state in userList
  function getUsers()
  {
    fetch("http://localhost:3033/api/databaseUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }

  // Deletes the user from the database
  function deleteUser(value)
  {
    axios.delete("http://localhost:3033/api/databaseUsers/delete", { data : { userData: value}})
        .then((resp) => {console.log(resp)})
        .catch((err) => {console.log("Failed to delete user [-]")})
      getUsers()
  }

  // Toggles the New User button color and text
  function togglePopupState(){
    let button = document.getElementById("newUserButton");
    if (newUserButtonIsClicked) {
      button.innerHTML = "Exit";
      button.style.backgroundColor = "#ff8164";
    } else {
      button.innerHTML = "New User"
      button.style.backgroundColor = "#b3cf99";
    }
  }
  
  // Fetch the users in the database
  useEffect(() => {
    try {
      getUsers()
    } catch (error) {
      console.log("Error parsing JSON")
    }
  }, [])

  // Toggle for "New User" Button
  useEffect(() => {
    togglePopupState()
  }, [newUserButtonIsClicked])


  // Creates DOM objects for users from database
  const listItems = userList.map((user, i) =>
    <tr key={i}>
      <td>{user._id}</td>
      <td>{user.Name}</td>
      <td>{user.Email}</td>
      <td><input id={user._id} type="submit" value="X" onClick={(event) => { deleteUser(event.target.id)}}/></td>
    </tr>
  );

  function UserManagement()
  {
    return (
      <>
      <div className="App">
        

        <h1>User Management:</h1>
        <button id="newUserButton" onClick={() => {setButtonState(!newUserButtonIsClicked)}}>New User</button>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {listItems}
            </tbody>
          </table>

          {newUserButtonIsClicked ? <Popup getUsers={getUsers} setButtonState={setButtonState} newUserButtonIsClicked={newUserButtonIsClicked}></Popup> : ""}
      </div>
      </>
    )
  }



/* 
#####################################################################################
Dashboard layout
#####################################################################################
*/
  return (
    <>
      <NavBar title="Dashboard" />
      <UserManagement />
      <br />
      <br />
      <CalendarSystem />
      <br />
      <br />
      <ImageSelector />
      
    </>
  );
}

export default Dashboard