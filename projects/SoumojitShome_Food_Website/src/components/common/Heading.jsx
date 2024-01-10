import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div className='heading tc'>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default Heading
