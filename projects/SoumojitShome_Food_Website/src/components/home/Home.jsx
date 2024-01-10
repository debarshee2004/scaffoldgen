import React from "react"
import Blog from "./blog/Blog"
import Customer from "./customer/Customer"
import Discount from "./discount/Discount"
import Dishes from "./dishes/Dishes"
import Download from "./download/Download"
import Hero from "./hero/Hero"
import Menu from "./menu/Menu"
import Offer from "./offer/Offer"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Offer />
      <Dishes />
      <Discount />
      <Download />
      <Team />
      <Customer />
      <Blog />
    </>
  )
}

export default Home
