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


function App() 
{
    
    return (
        
        <Router>
            <Routes>
                <Route path="*" element={<Homepage/>}></Route>
                <Route path="/calendar" exact element={<Calendar/>}></Route>
                <Route path="/dashboard" exact element={<Dashboard/>}></Route>
            </Routes>
        </Router>
        
    )
}

export default App