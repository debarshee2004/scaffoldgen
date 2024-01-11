import React, { useContext, useEffect, useState } from 'react'
import Appcontext from '../context/Appcontext'
import Authcontext from '../context/Authcontext';
import { updateBio } from '../api/Auth';
import AOS from 'aos'

AOS.init()

export const Editbio = () => {
    const { setOpenProfile } = useContext(Appcontext);
    const { user } = useContext(Authcontext);

    const [bio,setBio] = useState();

    useEffect(()=>{
        setBio(user?.bio);
    },[])

    const editBio = async () => {
        try {
            await updateBio(user?._id,bio)
            setOpenProfile(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full h-screen flex justify-center items-center" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
            <div class="w-full max-w-sm bg-[#1d232a] border border-gray-700 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000">
                <div class="flex flex-col items-center py-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.profileURL} alt="profile pic" />
                    <h5 class="mb-1 text-xl font-medium text-white">{user?.name}</h5>
                    <span class="text-sm text-gray-300">{user?.username}</span>
                    <div className='w-full px-5'>
                        <input type="text" id="Heading" className="bg-[#424f5f] w-[90%] border border-gray-700 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3 mt-4" value={bio} onChange={(e)=>setBio(e.target.value)} />
                    </div>
                    <div class="flex mt-4 md:mt-6">
                        <button class="inline-flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={editBio}>Save Changes</button>
                        <button class="inline-flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3" onClick={()=>setOpenProfile(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
