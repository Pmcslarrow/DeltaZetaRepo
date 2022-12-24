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
  return (
    <>
    <div className="App">
        <h1>Calendar System:</h1>
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