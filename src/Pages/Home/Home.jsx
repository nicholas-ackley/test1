import { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import About from '../About/About.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import About from '/About/About.jsx'


const Home = () => {

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="text">Your text here</div>
      {/* <div className="test">asd</div> */}
    </div>
    <About/>

    </>
  )
}

export default Home
