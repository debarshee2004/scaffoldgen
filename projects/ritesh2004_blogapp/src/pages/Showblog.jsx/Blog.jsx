import React, { useContext, useEffect, useState } from 'react'
import './Blog.css'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../api/Blog'
import { getUser } from '../../api/Auth'
import { Editbio } from '../../components/Editbio'
import Appcontext from '../../context/Appcontext'
import loader from '../../icons/loading.svg'

export const Blog = () => {
    const { openProfile } = useContext(Appcontext)

    const { id } = useParams();
    const [data, setData] = useState()
    const [author, setAuthor] = useState();

    const [loading,setLoading] = useState(false);

    const fetchAuthor = async (id) => {
        try {
            const { user } = await getUser(id);
            setAuthor(user)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { blog } = await getBlog(id);
                console.log(blog[0])
                setData(blog[0])
                fetchAuthor(blog[0].user)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const datetime = new Date(data?.createdAt);
    const formattedDate = datetime instanceof Date ? `${datetime.getFullYear()}-${(datetime.getMonth() + 1).toString().padStart(2, '0')}-${datetime.getDate().toString().padStart(2, '0')}` : "";


    return (
        <div>
            <Navbar bgColor='#00b4d8' />
            {openProfile && <Editbio />}
            {!loading?<div><div className='my-10 flex flex-col gap-5 justify-center items-center' style={{fontFamily:'Montserrat'}}>
                <span className='font-semibold text-2xl text-black p-5 w-full text-center md:w-[80%] md:text-4xl md:font-bold' style={{ color: '#008080' }}>
                    {data?.title}
                    <p className='text-lg text-gray-500 text-right'>- {formattedDate}</p>
                </span>
                <div className='w-full flex justify-around md:w-[80%] md:p-5'>
                    <figure className='w-[370px] h-auto md:w-[400px]'>
                        <img className='w-full h-full object-fit rounded-2xl' src={data?.imageURL} alt='image' />
                    </figure>
                    <hr className='hidden bg-gray-700 ml-5 w-[1px] h-auto md:block' />
                    <div className='w-[200px] hidden md:flex md:justify-center md:items-center md:flex-col md:p-4 md:rounded-lg md:block'>
                        <span className='text-white text-xl font-bold'>AUTHOR</span>
                        <br />
                        <img class="w-20 h-20 rounded-full" src={author?.profileURL} alt="Rounded avatar" />
                        <br />
                        <span className='text-white font-bold'>{author?.name}</span>
                        <span className='text-gray-100 bg-[#424f5f] px-4 py-1 rounded-2xl my-2'>@{author?.username}</span>
                        <p className='text-center text-gray-200'>
                            {author?.bio}
                        </p>
                    </div>
                </div>
                <span className='text-xl text-gray-400 p-5 w-full text-[#cccccc] md:w-[80%]' style={{ fontFamily: 'Montserrat' }}>
                    {data?.description}
                </span>
                
                <div className='w-[200px] flex justify-center items-center flex-col p-4 rounded-lg md:hidden'>
                        <span className='text-white text-xl font-bold'>AUTHOR</span>
                        <br />
                        <img class="w-20 h-20 rounded-full" src={author?.profileURL} alt="Rounded avatar" />
                        <br />
                        <span className='text-white font-bold'>{author?.name}</span>
                        <span className='text-gray-100 bg-[#424f5f] px-4 py-1 rounded-2xl my-2'>@{author?.username}</span>
                        <p className='text-center'>
                            {author?.bio}
                        </p>
                </div>
            </div> <Footer /></div>:<div className='h-[80vh] w-full flex justify-center items-center'><img className='w-10 h-10' src={loader} alt='loader'/></div>}
        </div>
    )
}
