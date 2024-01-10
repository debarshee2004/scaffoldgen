import React, { useState } from "react"
import Heading from "../../common/Heading"
import { dishes } from "../../data/Data"
import "./dishes.css"

const Dishes = () => {
  const [menuItems, setMenuItem] = useState(dishes)

  const filterItems = (category) => {
    const newItems = dishes.filter((item) => item.category === category)
    setMenuItem(newItems)

    // for all data show
    if (category === "all") {
      setMenuItem(dishes)
      return
    }
  }
  return (
    <>
      <section className='dishes'>
        <div className='scontainer'>
          <Heading subtitle='Popular dishes' title='POPULAR DISHES' />

          <div className='button'>
            <button onClick={() => filterItems("all")} className='btn1'>
              all
            </button>
            <button onClick={() => filterItems("BURGER")} className='btn1'>
              BURGER
            </button>
            <button onClick={() => filterItems("PIZZA")} className='btn1'>
              PIZZA
            </button>
            <button onClick={() => filterItems("BURGER")} className='btn1'>
              BLUEBERRY SHAKE
            </button>
            <button onClick={() => filterItems("PIZZA")} className='btn1'>
              CHICKEN CHUP
            </button>
            <button onClick={() => filterItems("BURGER")} className='btn1'>
              ICE CREAM
            </button>
            <button onClick={() => filterItems("DRINK")} className='btn1'>
              DRINK
            </button>
          </div>

          <div className='content grid2'>
            {menuItems.map((items, index) => (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={items.cover} alt='' />
                </div>
                <div className='title flex'>
                  <h4>
                    {items.sub} ,{items.category}
                  </h4>
                  {items.rate.map((icon) => (
                    <span>{icon}</span>
                  ))}
                </div>
                <h3>{items.title}</h3>
                <label>PRICE {items.price}</label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Dishes
