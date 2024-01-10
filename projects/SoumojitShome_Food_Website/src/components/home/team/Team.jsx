import React from "react"
import Heading from "../../common/Heading"
import { socialIcon, team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team'>
        <div className='scontainer'>
          <Heading subtitle='Our Professional' title='MEET OUR STUFF' />

          <div className='content grid2'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='name'>
                  <h3>{val.name}</h3>
                  <span>{val.exper}</span>
                </div>
                <div className='socialIcon'>
                  {socialIcon.map((val, index) => (
                    <label key={index}>{val.icon}</label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
