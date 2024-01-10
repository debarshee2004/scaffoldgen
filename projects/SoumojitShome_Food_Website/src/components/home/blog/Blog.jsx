import React from "react"
import { Link } from "react-router-dom"
import Heading from "../../common/Heading"
import { blog } from "../../data/Data"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <section className='blog'>
        <div className='scontainer'>
          <Heading subtitle='Recent Article' title='LATEST NEWS & BLOG' />

          <div className='content grid2'>
            {blog.map((val, index) => (
              <div className='box' key={index}>
                <div className='text'>
                  <span>{val.date}</span>
                  <h3>{val.name}</h3>
                </div>
                <div className='image'>
                  <img src={val.cover} alt='' />
                </div>
                <Link to='/'>
                  <i className='fa fa-long-arrow-alt-right'></i> READ MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
