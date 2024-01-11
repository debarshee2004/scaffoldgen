import React, { createContext, useEffect, useState } from "react";
import { verifyUser } from "../api/Auth";

const Authcontext = createContext();

export default Authcontext;

const Authprovider = ({children}) => {
    const [change,setChange] = useState(false)
    const [user,setUser] = useState();
    const [isAuthenticated,setAuthenticated] = useState(false)
    useEffect(()=>{
        const verify = async () => {
            try {
                const {user} = await verifyUser();
                setAuthenticated(true)
                setUser(user)
            } catch (error) {
                console.log(error)
                setAuthenticated(false)
            }
        }

        verify()
    },[change])

    // console.log(isAuthenticated)

    let values = {
        change,
        setChange,
        user,
        isAuthenticated,
        setAuthenticated
    }
    return (
        <Authcontext.Provider value={values}>
            {children}
        </Authcontext.Provider>
    )
}

export {Authprovider}