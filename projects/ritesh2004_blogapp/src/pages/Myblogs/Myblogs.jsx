import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { myBlogs } from '../../api/Blog'
import { Editbio } from '../../components/Editbio'
import Appcontext from '../../context/Appcontext'
import loader from '../../icons/loading.svg'
import { Link } from 'react-router-dom'

export const Myblogs = () => {
    const [blogs,setBlogs] = useState([]);
    const {openProfile} = useContext(Appcontext)

    useEffect(()=>{
        const getBlogs = async () => {
            try {
                const allBlogs = await myBlogs();
                setBlogs(allBlogs.blog)
            } catch (error) {
               console.log(error) 
            }
        }

        getBlogs()
    },[])

    return (
        <div className='w-full h-full bg-[#1d232a] min-h-full'>
            <Navbar bgColor='#00b4d8' />
            {openProfile && <Editbio />}
            <div className='cards my-10 flex flex-col gap-5 justify-center items-center min-h-[60vh] md:flex-wrap md:flex-row md:justify-around'>
            {blogs && blogs.length>0 ? blogs.map((blog)=>{
                    return (
                        <Card
                            title = {blog.title}
                            desc = {blog.description}
                            imageURL = {blog.imageURL}
                            author = {blog.user}
                            postId = {blog._id}
                        />
                    )
                }):<img className='w-10 h-10' src={loader} alt='loader'/>}
            </div>
            <Link className='fixed bottom-5 right-5 bg-blue-700 cursor-pointer p-3 rounded-xl hover:bg-[#03045e] md:bottom-10 md:right-10 md:p-5 md:rounded-2xl' to={'/add'}>
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
            </Link>
            <Footer/>
        </div>
    )
}