import React from "react"
import Heading from "../../common/Heading"
import "./download.css"

const Download = () => {
  return (
    <>
      <section className='download'>
        <div className='scontainer flexSB'>
          <div className='left row'>
            <div className='img'>
              <img src='../images/cta_app.png' alt='' />
            </div>
          </div>
          <div className='row'>
            <Heading subtitle='Download App' title='BEST APP FOR FOOD DELIVERY' />

            <div className='images flex'>
              <img src='../images/d1.png' alt='' />
              <img src='../images/d2.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
