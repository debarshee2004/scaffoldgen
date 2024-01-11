import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Authcontext from "../context/Authcontext";
import Appcontext from "../context/Appcontext";


export const Privateroute = ({ children }) => {
    const { isAuthenticated } = useContext(Authcontext);
    const {setOpenLogin} = useContext(Appcontext);
    const route = useNavigate();

    return (
        isAuthenticated ? <Outlet/> : setOpenLogin(true) || route('/')
    )
}