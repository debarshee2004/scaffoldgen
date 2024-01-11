import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../Images/carousel/Image.png'
import img2 from '../../Images/carousel/Image (1).png'
import img3 from '../../Images/carousel/Image (2).png'
import img4 from '../../Images/carousel/Rectangle 9.png'
import middle from '../../Images/carousel/middle.jpg'
import { Navbar } from '../../components/Navbar';
import { Card } from '../../components/Card';
import { ImageCard } from '../../components/ImageCard';
import { Footer } from '../../components/Footer';
import { LoginModal } from '../../components/LoginModal';
import Appcontext from '../../context/Appcontext';
import { SignupModal } from '../../components/SignupModal';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getallBlogs } from '../../api/Blog';
import { Editbio } from '../../components/Editbio';
import loader from '../../icons/loading.svg'


export const Home = () => {
    const { openLogin, openSignup,openProfile } = useContext(Appcontext);
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        const getBlogs = async () => {
            try {
                const allBlog = await getallBlogs();
                console.log(allBlog)
                setBlogs(allBlog.blog.reverse());
            } catch (error) {
                console.log(error);
            }
        }

        getBlogs()
    },[])

    const items = [
        <div className='w-full relative'>
            <img className='w-full' src={img1} alt="carousel pics" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-8 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">FutureTech</span>
                <br />
                <span className='carouselText pt-2'>
                    Explore the Future: Unraveling the Wonders of Science and Technology.
                </span>
            </div>
        </div>,
        <div className='w-full relative'>
            <img className='w-full' src={img2} alt="carousel pics" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-5 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">TechInnovations</span>
                <br />
                <span className='carouselText pt-2'>
                    Tech Trends Decoded: Your Gateway to the Latest Breakthroughs and Innovations
                </span>
            </div>
        </div>,
        <div className='w-full relative'>
            <img className='w-full' src={img3} alt="carousel pics" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-8 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">LabToLife</span>
                <br />
                <span className='carouselText pt-2'>
                    From Lab to Life: Dive into the World of Science and Tech Advancements.
                </span>
            </div>
        </div>,
        <div className='w-full relative'>
            <img className='w-full' src={img4} alt="carousel pics" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-5 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">InfinitePossibilities</span>
                <br />
                <span className='carouselText pt-2'>
                    Infinite Possibilities: Navigating the Frontiers of Science, One Article at a Time.
                </span>
            </div>
        </div>,
    ];
    return (
        <div className='home w-full h-full bg-[#1d232a] min-h-screen relative'>
        <Toaster/>
            {openLogin && <LoginModal />}
            {openSignup && <SignupModal />}
            {openProfile && <Editbio />}
            <AliceCarousel
                items={items}
                animationType='fadeout'
                animationDuration={1500}
                autoPlay
                autoPlayInterval={4000}
                infinite
                disableButtonsControls
                disableDotsControls
            />
            <div className='w-full absolute top-0'>
                <Navbar bgColor='rgba(0,0,0,0.2)' />
            </div>
            <div className='w-full py-8 px-10 md:py-16'>
                <span className='text-[24px] text-[#fdf0d5] font-extrabold border-l-8 border-[#62b6cb] px-5 md:text-4xl md:font-extrabold' id='blogText'>
                    BLOG ARTICLES
                </span>
                <div className='cards mt-10 flex flex-col gap-5 justify-center items-center md:flex-wrap md:flex-row md:justify-around'>
                {blogs && blogs.length>0 ? blogs.slice(0,3).map((blog)=>{
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
                <div className='w-full flex justify-center mt-8'>
                <Link to={'/blogs'} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-10 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Explore all
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
                </div>
            </div>
            <div className='w-full relative'>
                <figure className='w-full'>
                    <img className='w-full h-full object-fit' src={middle} alt='quote img'/>
                </figure>
                <span className='absolute text-white w-full text-sm p-2 top-2 left-0 md:w-[60%] md:top-[20%] md:left[50%] md:right-[50%] md:text-xl md:p-10' style={{ fontFamily: 'Montserrat' }}>
                    <strong>Unlock the future with the perfect chemistry of science and technology </strong> – where sparks of innovation ignite a world of endless possibilities.
                </span>
            </div>
            <div className='w-full flex justify-around flex-col py-16 px-10'>
                <span className='text-[24px] text-[#fdf0d5] font-bold border-l-8 border-[#62b6cb] px-5 md:text-4xl md:font-extrabold' id='blogText'>
                    EDITOR'S PICK
                </span>
                <div className='flex justify-around pt-10 flex-col justify-center gap-5 items-center md:flex-row'>
                    {blogs && blogs.length > 0 ? 
                    blogs.filter((b)=>b.editorsPick === true).map((blog)=>{
                        return (
                            <ImageCard
                                imageURL = {blog.imageURL}
                                title = {blog.title}
                                description = {blog.description}
                                id = {blog._id}
                             />
                        )
                    })
                    : <img className='w-10 h-10' src={loader} alt='loader'/>
                    }
                </div>
            </div>
            <Link className='fixed bottom-5 right-5 bg-blue-700 cursor-pointer p-3 rounded-xl hover:bg-[#03045e] md:bottom-10 md:right-10 md:p-5 md:rounded-2xl' to={'/add'}>
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
            </Link>
            <Footer />
        </div>
    )
}
