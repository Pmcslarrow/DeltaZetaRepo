import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import './index.css'
import Homepage from './Homepage'
import Calendar from './Calendar'
import Form from './footer_pages/form'
import Login from './Login'


function App() 
{

    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/calendar" exact element={<Calendar/>}></Route>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/form" exact element={<Form/>}></Route>
            </Routes>
        </Router>
        
    )
}

export default App