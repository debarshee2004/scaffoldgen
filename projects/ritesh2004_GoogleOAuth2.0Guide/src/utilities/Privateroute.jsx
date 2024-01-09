import React, { useContext } from 'react'
import Authcontext from '../context/Authcontext'
import { Navigate, Outlet } from 'react-router-dom'

// Private route which will let user go to another page after authentication otherwise not
export const Privateroute = () => {
    const { isAuthenticated } = useContext(Authcontext)
    console.log(isAuthenticated)
    return (
        isAuthenticated ? <Outlet/> : <Navigate to={'/'} />
    )
}
