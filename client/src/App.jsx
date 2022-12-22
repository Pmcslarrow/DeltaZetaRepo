import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route 
} from 'react-router-dom'
import './index.css'
import Homepage from './Homepage'
import Calendar from './Calendar'
import Dashboard from './Dashboard'
import Form from './footer_pages/form'
import Donate from './footer_pages/donate'
import Login from './Login'


function App() 
{
    localStorage.setItem("authenticationState", false)
    
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/calendar" exact element={<Calendar/>}></Route>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/form" exact element={<Form/>}></Route>
                <Route path="/donate" exact element={<Donate/>}></Route>
                { localStorage.getItem("authenticationState") && 
                  <Route exact path="/dashboard" element={<Dashboard/>} />
                }
            </Routes>
        </Router>
        
    )
}

export default App