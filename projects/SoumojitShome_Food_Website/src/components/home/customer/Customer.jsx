import React from "react"
import Heading from "../../common/Heading"
import { cdata, customer } from "../../data/Data"
import "./customer.css"

const Customer = () => {
  return (
    <>
      <section className='customer'>
        <div className='scontainer flexSB'>
          <div className='left row'>
            <Heading subtitle='Customer Feedback' title='WHAT DO OUR CLIENTS SAY?' />
            <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ore eu fuulla pariatur. Excepteur sint occaecat cupidatat non proideney.</p>

            <div className='leftContent grid2'>
              {cdata.map((val, index) => (
                <div className='box' key={index}>
                  <h1>{val.num}</h1>
                  <h4>{val.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='right row'>
            {customer.map((val, index) => (
              <div className='items' key={index}>
                <div className='img flexSB'>
                  <img src={val.cover} alt='' />
                  <span>{val.icon}</span>
                </div>
                <p>{val.desc}</p>
                <div className='details'>
                  <div className='dbox'>
                    <h3>{val.name}</h3>
                    <label>{val.post}</label>
                  </div>
                  <div className='dbox'>
                    <span>{val.rate}</span>
                    <h4>{val.ratenum}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Customer
