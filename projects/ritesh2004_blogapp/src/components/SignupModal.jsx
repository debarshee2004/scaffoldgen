import React, { useContext, useState } from 'react'
import Appcontext from '../context/Appcontext'
import axios from 'axios'
import { signUp } from '../api/Auth'
import { Toaster } from 'react-hot-toast'
import Authcontext from '../context/Authcontext'
import AOS from 'aos'

AOS.init()

export const SignupModal = () => {
    const { setOpenSignup, setOpenLogin } = useContext(Appcontext)
    const {setChange,change} = useContext(Authcontext)
    const [form,setForm] = useState({name:"",username:"",password:"",email:"",bio:""})
    const [image,setImage] = useState();
    const [loading,setLoading] = useState(false);
    const openLoginModal = () => {
        setOpenSignup(false)
        setOpenLogin(true)
    }
    const handleForm = (e) => {
        const {name,value} = e.target;
        setForm((preVal)=>{
            return {
                ...preVal,
                [name] : value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",image);
        formData.append("cloud_name","drctt42py");
        formData.append("upload_preset","rpBucket");

        setLoading(true)
        try {
            const {data} = await axios.post("https://api.cloudinary.com/v1_1/drctt42py/image/upload",formData)
            await signUp(form.name,form.username,form.email,form.password,data.url,form.bio)
            setChange(!change)
            setOpenSignup(false)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full h-screen flex justify-center items-center" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
        <Toaster/>
            <div className="relative p-4 w-[350px] max-w-md max-h-full md:w-[500px]" data-aos="fade-up" data-aos-duration="1000">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-3xl font-extrabold text-gray-900">
                            Create new account
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setOpenSignup(false)}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={form.name} onChange={handleForm} placeholder="# enter fullname" autoComplete='off' required />
                            </div>
                            <div>
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={form.username} onChange={handleForm} placeholder="# enter username" autoComplete='off' required />
                            </div>
                            <div>
                                <input type="text" name="bio" id="bio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={form.bio} onChange={handleForm} placeholder="# enter bio" autoComplete='off'/>
                            </div>
                            <div>
                                <input type="file" className="file-input file-input-bordered w-full rounded-full bg-gray-50 border-gray-300" autoComplete='off' onChange={(e)=>setImage(e.target.files[0])} required />
                                <div class="mt-1 text-sm text-gray-500" id="user_avatar_help">A profile picture is needed when creating an account</div>
                            </div>
                            <div>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" value={form.email} onChange={handleForm} placeholder="@ enter email id" required />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="# enter password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3" autoComplete='off' value={form.password} onChange={handleForm} required />
                            </div>
                            <br />
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-lg px-5 py-3 text-center" disabled={loading} style={{backgroundColor:loading&&"gray",cursor:loading&&"not-allowed"}}>SIGN UP</button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Already registered? <button className="text-blue-700 hover:underline dark:text-blue-500" onClick={openLoginModal}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
