import React, { createContext, useState } from "react";

const Appcontext = createContext();

export default Appcontext;

const AppcontextProvider = ({children}) => {
    const [openLogin,setOpenLogin] = useState(false)
    const [openSignup,setOpenSignup] = useState(false)
    const [openProfile,setOpenProfile] = useState(false)
    const [openProfileOptions,setOpenProfileOptions] = useState(false);

    let values = {
        openLogin,
        openSignup,
        setOpenLogin,
        setOpenSignup,
        openProfile,
        setOpenProfile,
        openProfileOptions,
        setOpenProfileOptions
    }
    return (
        <Appcontext.Provider value={values}>
            {children}
        </Appcontext.Provider>
    )
}

export {AppcontextProvider}