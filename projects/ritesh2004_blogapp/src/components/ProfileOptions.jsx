import React, { useContext } from 'react';
import AOS from 'aos';
import editLogo from '../icons/edit.svg';
import logoutLogo from '../icons/logout.svg';
import Appcontext from '../context/Appcontext';
import Authcontext from '../context/Authcontext';
import { logOut } from '../api/Auth';

AOS.init()

export const ProfileOptions = () => {
    const { setOpenProfile,setOpenProfileOptions } = useContext(Appcontext);
    const {change,setChange} = useContext(Authcontext);

    const handleLogout = async () => {
        try {
            await logOut();
            setChange(!change)
            setOpenProfileOptions(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='w-[100px] h-full bg-white shadow-lg text-black border-2 py-2 rounded' style={{position:'relative',zIndex:'2'}} data-aos="fade-down">
        <ul className='w-full'>
            <li className='w-full flex flex-row gap-1 items-center px-2 hover:bg-gray-300'>
            <button className='w-full flex flex-row gap-1 items-center' onClick={()=>setOpenProfile("block")}>
            <img className='w-4 h-4' src={editLogo} alt=''/>
            Edit Bio </button></li>
            <li className='w-full flex flex-row gap-1 items-center px-2 hover:bg-gray-300'>
            <button className='w-full flex flex-row gap-1 items-center' onClick={handleLogout}>
            <img className='w-4 h-4' src={logoutLogo} alt=''/>
            Logout </button></li>
        </ul>
    </div>
  )
}
