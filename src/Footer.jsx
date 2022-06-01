import React from 'react'
import {Link} from "react-scroll"
import akglogo from "./assets/akglogo.png"
import silogo from "./assets/silogo.png"

const Footer = () => {
  return (
    <>
        <div className='footer1'>
          <img src={akglogo} alt="AKGLOGO"/>
          <h1>Ajay Kumar Garg Engineering college, Ghaziabad</h1>
          <div className="link">
            <Link to="home" smooth={true}>Home</Link>
            <Link to="aboutAkg" smooth={true}>About Akgec</Link>
            <Link to="call" smooth={true}>Call for Papers</Link>
            <Link to="committee" smooth={true}>Program Committee</Link>
            <Link to="keynote" smooth={true}>Keynote Speakers</Link>
            <Link to="paper" smooth={true}>Paper Submission</Link>
            <Link to="" smooth={true}>Important Dates</Link>
            <Link to="" smooth={true}>Registration Fee</Link>
            <Link to="" smooth={true}>Best Paper Award</Link>
            <Link to="contact" smooth={true}>Contact Us</Link>

          </div>
          <hr></hr>
          <p style={{textAlign:"center"}} className='softInc'>Designed & Developed by: <a href="https://silive.in/" target="_blank" className='softInc'><img src={silogo}  alt="SI LOGO"/> SOFTWARE INCUBATOR</a></p>
        </div>
    </>
  )
}

export default Footer
