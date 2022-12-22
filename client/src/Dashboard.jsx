import NavBar from './Navbar'
import { useEffect, useState } from 'react'

function Dashboard()
{
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3033/databaseUserInformation")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
        
    }, [])
    console.log(users)
    return (
        <>
            <NavBar title="Dashboard"></NavBar>
        </>
    )
}

export default Dashboard