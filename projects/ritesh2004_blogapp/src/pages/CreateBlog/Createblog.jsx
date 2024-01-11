import React, { useContext, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import axios from 'axios';
import { uploadBlog } from '../../api/Blog';
import { Toaster } from 'react-hot-toast';
import { Editbio } from '../../components/Editbio';
import Appcontext from '../../context/Appcontext';
import { useNavigate } from 'react-router-dom';

export const Createblog = () => {

    const { openProfile } = useContext(Appcontext)

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [loading,setLoading] = useState(false);

    const route = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        formData.append("cloud_name", "drctt42py");
        formData.append("upload_preset", "rpBucket");

        try {
            setLoading(true)
            const { data } = await axios.post("https://api.cloudinary.com/v1_1/drctt42py/image/upload", formData)

            await uploadBlog(title, desc, data.url)
            setLoading(false);
            setTitle("");
            setDesc("");
            setImage("");
            route("/myblogs");
        } catch (error) {
            setLoading(false)
            alert("Something went wrong!")
        }

        // console.log(data)

    }

    return (
        <div className='w-full h-screen bg-[#1d232a]'>
            <Navbar bgColor='#00b4d8' />
            <Toaster/>
            {openProfile && <Editbio />}
            <div className='w-full h-auto flex justify-center items-center mt-5 md:mt-14'>
                <form class="w-[90%] md:w-[40%]" onSubmit={handleSubmit}>
                    <div className='w-full text-center flex flex-col my-5'>
                        <span className='font-extrabold text-white text-5xl'>
                            POST
                        </span>
                        <span className='text-white text-sm'>
                            Your thoughts
                        </span>
                    </div>
                    <div class="mb-5">
                        <input type="text" id="Heading" class="bg-[#424f5f] border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="# enter title" required />
                    </div>
                    <div class="mb-5">
                        <input type="file" className="file-input file-input-bordered w-full rounded-full bg-[#424f5f] border-white" onChange={(e) => setImage(e.target.files[0])} required />
                        <div class="mt-1 text-sm text-gray-500" id="user_avatar_help">A poster image is needed when you're posting a blog</div>
                    </div>
                    <div class="mb-10">
                        <textarea rows='5' id="Description" class="bg-[#424f5f] border border-gray-300 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="# enter detailed blog" required />
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={loading} style={{backgroundColor:loading&&"gray",cursor:loading&&"not-allowed"}}>POST</button>
                </form>
            </div>
        </div>
    )
}
