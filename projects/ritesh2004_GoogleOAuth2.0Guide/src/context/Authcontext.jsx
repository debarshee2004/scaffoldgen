import axios from "axios";
import react, { useEffect, useState } from "react";
import { createContext } from "react";

// Creating context
const Authcontext = createContext();

// Exporting context
export default Authcontext;

// Making function which will provide context data
export const ContextProvider = ({children}) => {
    const [user,setUser] = useState()
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    // Get user on first loading and whenever value of isAuthenticated changed
    useEffect(()=>{
        // Make a function for fetching user data 
        const getUser = async () => {
            try {
                const { data } = await axios.get('http://localhost:4000/login/user',{withCredentials:true})
                // Update user state after loading data
                setUser(data.user)
                // If data.success is True then update state of isAuthenticated to true
                if (data.success) {
                    setIsAuthenticated(true)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getUser()
    },[isAuthenticated])
    // Include values which would be passed to children
    let values = {
        user,
        setUser,
        isAuthenticated
    }
    return (
        <Authcontext.Provider value={values}>
            {children}
        </Authcontext.Provider>
    )
}