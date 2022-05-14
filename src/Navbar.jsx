import React from 'react'
import {Link} from "react-scroll"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <>
        <div className="top">
            <p>International Conference
            on
            Advances in Communication, Electronics & Computing -2023
            </p>
        </div>
        <div className='topfix'>.</div>
        <div className='navbar'>
          <div>
            <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            <Link to="aboutAkg" spy={true} smooth={true}>About AKGEC</Link>
            <Link to="call" spy={true} smooth={true}>Call for Papers</Link>
            <Link to="committee" spy={true} smooth={true}>Committee</Link>
            <Link to="keynote" spy={true} smooth={true}>Keynote Speakers</Link>
            <Link to="" spy={true} smooth={true}>Important Dates</Link>

            <div className="dropdown">
              <button className="dropbtn">More <KeyboardArrowDownIcon style={{position:"relative", top:"6px"}}/> </button>
              <div className="dropdown-content">
              <Link activeClass="active" to="paper" spy={true} smooth={true}>Paper Submission</Link>
              <Link to="home" spy={true} smooth={true}>Best Paper Award</Link>
              <Link to="contact" spy={true} smooth={true}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='navfix'>.</div>
    </>
  )
}

export default Navbar