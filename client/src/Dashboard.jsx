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
  const [calendarList, setCalendarList] = useState([])

  function getCalendarValues()
  {
    fetch("http://localhost:3033/api/calendar")
      .then((res) => res.json())
      .then((data) => setCalendarList(data))
  }

  useEffect(() => {
    getCalendarValues()
  }, [])

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

  // If the data in the form is submitted correctly then it will push it to the database here
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = formData
    const url = "/api/calendar"
    if ( validUserInputs(data) )
    {
      axios.post(url, data)
        .then((response) => {
            console.log(response)
            document.getElementById("eventId").value = ""
            document.getElementById("locationId").value = ""
            document.getElementById("dateId").value = ""
            document.getElementById("startId").value = ""
            document.getElementById("endId").value = ""
            document.getElementById("timezoneId").value = ""
            getCalendarValues()
      })
        .catch((err) => {console.log(err)})
    } else {
      console.log("Invalid Input (Don't use any characters other than letters)")
    }
  }

  // Deletes the calendar event from the database
  function deleteCalendarEvent(id)
  {
    axios.delete("http://localhost:3033/api/calendar", { data : { userData: id}})
        .then((resp) => {console.log(resp)})
        .catch((err) => {console.log("Failed to delete user [-]")})
      getCalendarValues()

  }

  // Creates DOM objects for calendar values from database
  const calendarListItems = calendarList.map((event, i) =>
    <tr key={i}>
      <td>{event.event}</td>
      <td>{event.location}</td>
      <td>{event.date}</td>
      <td>{event.start_time}</td>
      <td>{event.end_time}</td>
      <td>{event.timezone}</td>
      <td><input id={event._id} type="submit" value="X" onClick={(event) => { deleteCalendarEvent(event.target.id)}}/></td>
    </tr>
  );




  return (
    <>
    <div className="App">
        <h1>Calendar System:</h1>

        <form onSubmit={handleSubmit}>
          <div id="calendarWrapper">
              <label>Event:</label>
                  <input type="text" name="event" placeholder="Event name" id="eventId" className="nameClass" onChange={handleChange} required/>
              <label>Location:</label>
                <input type="text" name="location" placeholder="Location name" id="locationId" className="nameClass" onChange={handleChange} required/>
            
              <label>Date:</label>
                  <input type="date" name="date" placeholder="Date" id="dateId" className="nameClass" onChange={handleChange} required/>
              <label>Start time:</label>
                  <input type="time" name="startTime" placeholder="Start time" id="startId" className="nameClass" onChange={handleChange} required/>
              <label>End time:</label>
                  <input type="time" name="endTime" placeholder="End time" id="endId" className="nameClass" onChange={handleChange} required/>
              <label>Timezone:</label>
                  <input type="text" name="timezone" placeholder="Timezone" id="timezoneId" className="nameClass" onChange={handleChange} required/>

              <button type="submit">Submit</button>
          </div>
        </form>



        <div id="calendarValues">
            <h1>Current Values:</h1>

            <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Location</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Timezone</th>
              </tr>
            </thead>

            <tbody>
              {calendarListItems}
            </tbody>
          </table>

        </div>
    </div>
    </>
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
    fetch("http://localhost:3033/api/databaseUsers",{
      headers: {Authentication: 'SIGMA_CHI_TOKEN'}
    })
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
    </>
  );
}

export default Dashboard