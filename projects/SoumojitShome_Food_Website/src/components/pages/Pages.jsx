import React from "react"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import Home from "../home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "../about/About"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
