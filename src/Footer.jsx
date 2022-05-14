import React from 'react'
import {Link} from "react-scroll"
import akglogo from "./assets/akglogo.png"
import silogo from "./assets/silogo.png"

const Footer = () => {
  return (
    <>
        <div className='footer'>
          <img src={akglogo} alt="AKGLOGO"/>
          <h1>Ajay Kumar Garg Engineering college, Ghaziabad</h1>
          <div className="link">
            <Link to="home" smooth={true}>Home</Link>
            <Link to="aboutAkg" smooth={true}>About Akgec</Link>
            <Link to="call" smooth={true}>Call for Papers</Link>
            <Link to="committee" smooth={true}>Committee</Link>
            <Link to="keynote" smooth={true}>Keynote Speakers</Link>
            <Link to="paper" smooth={true}>Paper Submission</Link>
            <Link to="" smooth={true}>Important Dates</Link>
            <Link to="" smooth={true}>Registration Fee</Link>
            <Link to="" smooth={true}>Best Paper Award</Link>
            <Link to="contact" smooth={true}>Contact Us</Link>

          </div>
          <hr></hr>
          <p>Designed & Developed by <img src={silogo} style={{position:"relative", top:"8px"}} alt="SI LOGO"/> SOFTWARE INCUBATOR</p>
        </div>
    </>
  )
}

export default Footer