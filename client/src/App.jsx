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


function App() 
{
    
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/calendar" exact element={<Calendar/>}></Route>
                <Route path="/dashboard" exact element={<Dashboard/>}></Route>
                <Route path="/form" exact element={<Form/>}></Route>
                <Route path="/donate" exact element={<Donate/>}></Route>
            </Routes>
        </Router>
        
    )
}

export default App