import React from 'react'
// import {Link} from "react-scroll"
import { HashLink as Link } from 'react-router-hash-link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {
  const navShow = ()=>{
    let hamMenu = document.querySelector(".hamMenu")
    if(hamMenu.style.visibility==="visible"){
      hamMenu.style.visibility="hidden";
      hamMenu.style.opacity=0;
    } else {
      hamMenu.style.visibility="visible";
      hamMenu.style.opacity=1;
    }
    

  }
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
          <div className='webLinks'>
            <Link activeClass="active" to="/#home" spy={true} smooth={true}>Home</Link>
            <Link to="/#aboutAkg" spy={true} smooth={true}>About AKGEC</Link>
            <Link to="/#call" spy={true} smooth={true}>Call for Papers</Link>
            <Link to="/#committee" spy={true} smooth={true}>Committee</Link>
            <Link to="/#keynote" spy={true} smooth={true}>Keynote Speakers</Link>
            <Link to="/important-dates" spy={true} smooth={true}>Important Dates</Link>

            <div className="dropdown">
              <button className="dropbtn">More <KeyboardArrowDownIcon style={{position:"relative", top:"6px"}}/> </button>
              <div className="dropdown-content">
              <Link activeClass="active" to="/#paper" spy={true} smooth={true}>Paper Submission</Link>
              <Link to="/#home" spy={true} smooth={true}>Best Paper Award</Link>
              <Link to="/#contact" spy={true} smooth={true}>Contact Us</Link>
              </div>
            </div>
          </div>

          <button className="hamburger" onClick={navShow}> <MenuIcon fontSize='large'/></button>
          <ul className='hamMenu'>
              <li><Link activeClass="active" to="/#home" spy={true} smooth={true}>Home</Link></li>
              <li><Link to="/#aboutAkg" spy={true} smooth={true}>About AKGEC</Link></li>
              <li><Link to="/#call" spy={true} smooth={true}>Call for Papers</Link></li>
              <li><Link to="/#committee" spy={true} smooth={true}>Committee</Link></li>
              <li><Link to="/#keynote" spy={true} smooth={true}>Keynote Speakers</Link></li>
              <li><Link to="/important-dates" spy={true} smooth={true}>Important Dates</Link></li>
              <li><Link activeClass="active" to="/#paper" spy={true} smooth={true}>Paper Submission</Link></li>
              <li><Link to="/#home" spy={true} smooth={true}>Best Paper Award</Link></li>
              <li><Link to="/#contact" spy={true} smooth={true}>Contact Us</Link></li>
          </ul>

        </div>
        <div className='navfix'>.</div>
    </>
  )
}

export default Navbar