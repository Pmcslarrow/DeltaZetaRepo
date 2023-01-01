import NavBar from './Navbar'
import { useEffect, useState } from 'react'


function Calendar()
{
    const [calendarValues, setCalendarValues] = useState([])

    function getCalendarValues()
    {
        fetch("http://localhost:3033/api/calendar")
        .then((res) => res.json())
        .then((data) => setCalendarValues(data))
    }

    // On load get calendar data from the API
    useEffect(() => {
       getCalendarValues()
    }, [])

    const calendarListItems = calendarValues.map((event, i) =>
        <tr key={i}>
            <td>{event.event}</td>
            <td>{event.location}</td>
            <td>{event.date.substring(0, 10)}</td>
            <td>{event.start_time}</td>
            <td>{event.end_time}</td>
            <td>{event.timezone}</td>
        </tr>
    );


    return (
        <>
            <NavBar title="Calendar"></NavBar>

            <div className='scroll'>
                <table id="client-calendar">
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
        </>
    )
}

export default Calendar