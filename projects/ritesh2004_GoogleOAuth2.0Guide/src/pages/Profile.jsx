import axios from 'axios'
import React, { useContext } from 'react'
import Authcontext from '../context/Authcontext'

export const Profile = () => {
    // For accessing user data from Authcontext file 
    const { user,setUser,setIsAuthenticated } = useContext(Authcontext);
    console.log(user)
    const logout = async () => {
        // Make a GET request of this endpoint to logout and clear all sessions 
        await axios.get('http://localhost:4000/logout/user',{withCredentials:true})
        // Then redirect to the home page 
        window.open('/','_self')
    }
    return (
        <div>
            <h1>Profile</h1>
            <img style={{ borderRadius: '50%' }} src={user?.picture} />
            <h2>{user?.displayName}</h2>
            {/* If User's email is verified then show the verified icon  */}
            <h2>{user?.email} &nbsp;{user?.verified && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3a86ff" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>}</h2>
            <button onClick={logout}>LOG OUT</button>
        </div>
    )
}
