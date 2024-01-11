import React from 'react'
import Input from './assets/Input'
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Input/>}/>
        <Route path="/:slug" element={<Input/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App