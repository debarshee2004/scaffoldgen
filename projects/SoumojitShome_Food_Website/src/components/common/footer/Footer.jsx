import React from "react"
import { Link } from "react-router-dom"
import { blog, navList, socialIcon } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='scontainer'>
          <div className='newletter flexSB'>
            <h1 className='row'>SUBSCRIBE NEWSLETTER</h1>
            <div className='input flex row'>
              <input type='text' placeholder='Enter your email' />
              <button className='btn1'>SUBSCRIBE NOW</button>
            </div>
          </div>

          <div className='content grid'>
            <div className='items'>
              <h3>ABOUT FRUDBAZ</h3>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>

            <div className='items'>
              <h3>CONTACT US</h3>
              <h4>
                <span>ADDRESS: </span>8638 Amarica Stranfod Mailbon Star, California, TX 70240
              </h4>
              <h4>
                <span>MAIL: </span>support@example.com
              </h4>
              <h4>
                <span>PHONE: </span>+7464 0187 3535 645
              </h4>
              <h4>
                <span>FAX ID: </span>+9 659459 49594
              </h4>
            </div>

            <div className='items'>
              <h3>LINKS</h3>
              <ul>
                {navList.map((val, index) => {
                  return (
                    <li>
                      <Link to={val.path}>{val.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='items blogs'>
              <h3>RECENT BLOG</h3>

              {blog.slice(0, 2).map((val, index) => (
                <div className='box flex' key={index}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h5>{val.name}</h5>
                    <span>{val.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <section className='legal'>
        <div className='scontainer flexSB'>
          <div className='logo'>
            <img src='../images/logo.png' alt='' />
          </div>
          <p>Copy Right © Example 2022.Design By GorkCoder</p>

          <div className='social'>
            {socialIcon.map((val) => {
              return <span>{val.icon}</span>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
