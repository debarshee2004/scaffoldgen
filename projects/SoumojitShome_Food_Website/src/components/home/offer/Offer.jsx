import React from "react"
import Heading from "../../common/Heading"
import "./offer.css"

const Offer = () => {
  return (
    <>
      <section className='offer'>
        <div className='scontainer flexSB'>
          <div className='row'>
            <Heading subtitle='Special Offer' title='GOOD FOOD, DRINKS & GREAT COMPANY.' />
            <p>As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat. advice you to call us of before arriving As well known and we are very busy all days advice you</p>
            <div className='button flex '>
              <button className='btn2'>order now</button>
              <h1>
                $46.99 <span>$59.99</span>
              </h1>
            </div>
          </div>
          <div className='row'>
            <img src='../images/offer_img.png' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
