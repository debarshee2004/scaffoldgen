import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { editBlog, getBlog } from '../../api/Blog';
import { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { Editbio } from '../../components/Editbio';
import Appcontext from '../../context/Appcontext';

export const Editblog = () => {
  const { openProfile } = useContext(Appcontext)

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const route = useNavigate();

  useEffect(() => {
    const pastData = async () => {
      try {
        const { blog } = await getBlog(id);
        setTitle(blog[0].title)
        setDesc(blog[0].description)
      } catch (error) {
        console.log(error)
      }
    }

    pastData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await editBlog(id,title,desc)
      setLoading(false);
      setTitle("");
      setDesc("");
      route("/myblogs")
    } catch (error) {
      setLoading(false)
      alert("Something went wrong!")
    }

    // console.log(data)

  }

  return (
    <div className='w-full h-screen bg-[#1d232a]'>
      <Navbar bgColor='#00b4d8' />
      <Toaster />
      {openProfile && <Editbio />}
      <div className='w-full h-auto flex justify-center items-center items-center mt-5 md:mt-14'>
        <form class="w-[90%] mx-auto my-auto md:w-[40%]" onSubmit={handleSubmit}>
          <div className='w-full text-center flex flex-col my-5'>
            <span className='font-extrabold text-white text-5xl'>
              EDIT
            </span>
            <span className='text-white text-sm'>
              Your post
            </span>
          </div>
          <div class="mb-5">
            <input type="text" id="Heading" class="bg-[#424f5f] border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="# enter title" required />
          </div>
          <div class="mb-10">
            <textarea rows='5' id="Description" class="bg-[#424f5f] border border-gray-300 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="# enter detailed blog" required />
          </div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={loading} style={{ backgroundColor: loading && "gray", cursor: loading && "not-allowed" }}>EDIT</button>
        </form>
      </div>
    </div>
  )
}
