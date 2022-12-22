import NavBar from './Navbar'
import { useEffect, useState } from 'react'

function Calendar()
{
    const [calendarValues, setCalendarValues] = useState([])

    // On load get calendar data from the API
    useEffect(() => {
        fetch("http://localhost:3033/calendar")
            .then((res) => res.json())
            .then((data) => {
                setCalendarValues(data)
            })
    }, [])


    return (
        <>
            <NavBar title="Calendar"></NavBar>

            <ol>
                <li>Insert the calendarValues here</li>
            </ol>
        </>
    )
}

export default Calendar