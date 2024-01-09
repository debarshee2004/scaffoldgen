import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Privateroute } from './utilities/Privateroute'
import Authcontext from './context/Authcontext'
import { Error } from './pages/Error'

function App() {
  const { user } = useContext(Authcontext);
  // console.log(user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route Component={Privateroute}>
            <Route path='/profile' Component={Profile} />
          </Route>
          <Route path='/error' Component={Error} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
