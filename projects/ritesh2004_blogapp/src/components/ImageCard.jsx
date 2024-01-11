import React from 'react'
import './ImageCard.css'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

export const ImageCard = (props) => {
    const router = useNavigate();
    return (
        <div class="image-container hover:cursor-pointer" data-aos="zoom-in-up" onClick={()=>router(`/blog/${props.id}`)}>
        <figure className='w-[300px] h-[200px] md:w-[450px] md:h-[350px]'>
            <img className='rounded-xl' style={{height:'100%',width:'100%',objectFit:'cover'}} src={props.imageURL} alt="blog pic" />
        </figure>
            <div class="overlay flex flex-col gap-3">
                <span className='font-[500] text-[18px] md:text-3xl md:font-bold'>
                    {props.title?.slice(0, 20)}...
                </span>
                <span className='text-gray-200 text-[12px] md:text-xl'>
                    {props.description?.slice(0, 80)}<span className='text-gray-500'>...read more</span>
                </span>
            </div>
        </div>
    )
}
