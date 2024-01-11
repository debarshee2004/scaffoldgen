import React, { useContext, useEffect, useState } from 'react';
import editLogo from '../icons/edit.svg';
import deleteLogo from '../icons/delete.svg'
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from '../api/Blog';
import Authcontext from '../context/Authcontext';
import AOS from 'aos';

AOS.init()

export const Options = ({ id,author }) => {
    const { user } = useContext(Authcontext);
    const [disabled,setDisabled] = useState(true);
    const route = useNavigate();
    useEffect(()=>{
        try {
            if (user._id === author) {
                setDisabled(false)
            } 
        } catch (error) {
            console.log(error)
        }
    },[])
    const router = useNavigate();
    const handleDelete = async () => {
        const confirmation = window.confirm("Are you sure?");
        if (confirmation) {
            try {
                await deleteBlog(id);
                route("/myblogs");
            } catch (error) {
                console.log(error)
            }
        }
    }
    console.log(disabled)
  return (
    <div className='w-[100px] h-full bg-white text-black py-2 rounded' style={{position:'relative',zIndex:'2',boxShadow:'#0000002b 0px 11px 20px 0px'}} data-aos="fade-down">
        <ul className='w-full' style={{opacity:disabled&&0.3}}>
            <li className='w-full flex flex-row gap-1 items-center px-2 hover:bg-gray-300'>
            <button className='w-full flex flex-row gap-1 items-center' onClick={()=>router(`/edit/${id}`)} style={{cursor:!disabled&&'pointer'}} disabled={disabled}>
            <img className='w-4 h-4' src={editLogo} alt=''/>
            Edit </button></li>
            <li className='w-full flex flex-row gap-1 items-center px-2 hover:bg-gray-300'>
            <button className='w-full flex flex-row gap-1 items-center' onClick={handleDelete} style={{cursor:!disabled&&'pointer'}} disabled={disabled}>
            <img className='w-4 h-4' src={deleteLogo} alt=''/>
            Delete </button></li>
        </ul>
    </div>
  )
}
