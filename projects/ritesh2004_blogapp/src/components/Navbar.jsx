import React, { useContext } from 'react'
import Appcontext from '../context/Appcontext'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Authcontext from '../context/Authcontext'
import { Toaster } from 'react-hot-toast'
import { ProfileOptions } from './ProfileOptions'
import logo from '../Images/carousel/logo.png'
import { logOut } from '../api/Auth'
import axios from 'axios'

export const Navbar = ({ bgColor }) => {
    const { setOpenLogin, setOpenSignup, setOpenProfileOptions, openProfileOptions, setOpenProfile } = useContext(Appcontext);
    const { isAuthenticated, user,change,setChange } = useContext(Authcontext);

    // console.log(isAuthenticated)
    // console.log(user?.profileURL)
    const handleLogout = async () => {
        try {
            await logOut();
            setChange(!change)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='relative'>
            <Toaster />
            <div className="drawer relative z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#1d232a] text-base-content">
                        {/* Sidebar content here */}
                        <li className="block py-2 px-3 text-white">
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li class="block py-2 px-3 text-white">
                            <NavLink to={'/blogs'}>Posts</NavLink>
                        </li>
                        <li class="block py-2 px-3 text-white rounded">
                            <NavLink to={'/myblogs'}>My Posts</NavLink>
                        </li>
                        {isAuthenticated && <li class="block py-2 px-3 text-white rounded">
                            <span onClick={() => setOpenProfile(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>Edit Bio</span>
                        </li>}
                        {isAuthenticated && <li class="block py-2 px-3 text-white rounded" onClick={handleLogout}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>Logout</span>
                        </li>}
                        {!isAuthenticated && <li>
                            <button type="button" class="px-6 py-2 mb-3 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpenLogin(true)}>Login</button>
                        </li>}
                        {!isAuthenticated ? <li>
                            <button type="button" class="my-2 text-white font-medium border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 text-center" onClick={() => setOpenSignup(true)}>Signup</button>
                        </li> :
                            <div className='px-6'>
                                <img class="my-5 w-10 h-10 rounded-full cursor-pointer" src={user?.profileURL} alt="Rounded avatar" />
                            </div>}
                    </ul>
                </div>
            </div>
            <nav class="bg-[#000000] bg-opacity-20" style={{ backgroundColor: bgColor }}>
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-10 w-10 rounded-full" alt="QuantumQuill Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">QuantumQuill</span>
                    </a>
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-ghost text-white drawer-button md:hidden">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </label>
                    </div>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 justify-center items-center md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                            <li className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700">
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li class="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                <NavLink to={'/blogs'}>Posts</NavLink>
                            </li>
                            <li class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                <NavLink to={'/myblogs'}>My Posts</NavLink>
                            </li>
                            {!isAuthenticated && <li>
                                <button type="button" class="px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpenLogin(true)}>Login</button>
                            </li>}
                            {!isAuthenticated ? <li>
                                <button type="button" class="text-white font-medium border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 text-center" onClick={() => setOpenSignup(true)}>Signup</button>
                            </li> : <img class="w-10 h-10 rounded-full cursor-pointer" src={user?.profileURL} alt="Rounded avatar" onClick={() => setOpenProfileOptions(!openProfileOptions)} />}
                        </ul>
                    </div>
                </div>
            </nav>
            {openProfileOptions && <div className='absolute right-[4%]'>
                <ProfileOptions />
            </div>}
        </div>
    )
}
