import React from "react"
import Heading from "../../common/Heading"
import { menu } from "../../data/Data"
import "./menu.css"

const Menu = () => {
  return (
    <>
      <section className='menu'>
        <div className='scontainer'>
          <Heading subtitle='Our Popular Menu' title='WENT TO EAT?' />

          <div className='content grid'>
            {menu.map((items, index) => {
              return (
                <div className='box' key={index}>
                  <div className='id flexSB'>
                    <span>{items.icon}</span>
                    <h1>0{items.id}</h1>
                  </div>
                  <h3>{items.title}</h3>
                  <p>{items.desc}</p>
                  <img src={items.cover} alt='' />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
