import React, { useEffect, useState } from 'react'
import './Card.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { getUser } from '../api/Auth';
import { useNavigate } from 'react-router-dom';
import share from '../icons/share.svg'
import threedot from '../icons/threedot.svg'
import toast from 'react-hot-toast';
import { Options } from './Options';

AOS.init()

export const Card = (props) => {
    const [author, setAuthor] = useState();
    const [open, setOpen] = useState(false);
    const router = useNavigate();
    const getAuthor = async () => {
        try {
            const { user } = await getUser(props.author);
            setAuthor(user)
        } catch (error) {
            console.log("error", error)
        }
    }
    useEffect(() => {
        getAuthor()
    }, [])
    const shareCard = async () => {
        try {
            // Use the Clipboard API to write text to the clipboard
            await navigator.clipboard.writeText(`https://quantum-quill1-0.vercel.app/blog/${props.postId}`);
            toast.success("Link copied to clipboard")
            console.log('Text copied to clipboard successfully');
        } catch (err) {
            console.error('Error copying text to clipboard:', err);
        }
    };
    return (
        <div style={{ fontFamily: 'Montserrat' }} data-aos="zoom-in-up">
            <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow w-[360px] h-[410px] md:h-[400px] md:w-[365px]">
                <figure className='w-[359px] h-[200px] md:w-[364px]'>
                    <img class="rounded-t-lg" style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={props.imageURL} alt="card" />
                </figure>
                <div class="relative p-5">
                    <h5 class="w-full mb-2 text-2xl font-bold tracking-tight text-gray-900 flex justify-between">{props.title?.slice(0, 20)}... <span className='w-10 h-10 p-2 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-300' onClick={() => setOpen(!open)}>
                        <img className='w-5 h-5' src={threedot} alt='options' />
                    </span></h5>
                    {open && <div className='absolute top-[3.25rem] right-[2.5rem]'><Options id={props?.postId} author={props.author} /></div>}
                    <p class="mb-3 font-normal text-gray-700 cursor-pointer" onClick={() => router(`/blog/${props.postId}`)}>{props.desc?.slice(0, 50)}<span className='text-blue-500'>...read more</span></p>
                    <div className='fixed bottom-5 w-[calc(100%-3rem)] flex justify-between items-center'>
                        <span className='flex gap-2 items-center text-gray-500'>
                            <img class="w-10 h-10 rounded-full" src={author?.profileURL} alt="Rounded avatar" />
                            <span style={{ fontFamily: 'Montserrat', fontSize: 'small' }}>@{author?.username}</span>
                        </span>
                        <div className='flex flex-row gap-2 items-center'>
                            <span className='p-2 rounded-full shadow cursor-pointer hover:bg-gray-300' onClick={shareCard}>
                                <img className='w-5 h-5' src={share} alt='share icon' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
