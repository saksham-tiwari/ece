import React, { useState } from 'react'
// import {Link} from "react-scroll"
import { HashLink as Link } from 'react-router-hash-link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const navShow = ()=>{
    let hamMenu1 = document.querySelector(".hamMenu1")
    if(hamMenu1.style.visibility==="visible"){
      hamMenu1.style.visibility="hidden";
      hamMenu1.style.opacity=0;
      setIsOpen(false)
    } else {
      hamMenu1.style.visibility="visible";
      hamMenu1.style.opacity=1;
      setIsOpen(true)

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
        <div className='navbar1'>
          <div className='webLinks'>
            <Link activeClass="active" to="/#home" spy={true} smooth={true}>Home</Link>
            <Link to="/#aboutAkg" spy={true} smooth={true}>About AKGEC</Link>
            <Link to="/#call" spy={true} smooth={true}>Call for Papers</Link>
            <Link to="/#committee" spy={true} smooth={true}>Technical Committee</Link>
            <Link to="/#keynote" spy={true} smooth={true}>Keynote Speakers</Link>
            <Link to="/important-dates" spy={true} smooth={true}>Important Dates</Link>

            <div className="dropdown1">
              <button className="dropbtn" style={{paddingTop:"9px"}}>More <KeyboardArrowDownIcon/> </button>
              <div className="dropdown1-content">
              <Link activeClass="active" to="/#paper" spy={true} smooth={true}>Paper Submission</Link>
              <Link to="/programme-committee" spy={true} smooth={true}>Programme Committee</Link>

              <Link to="/#home" spy={true} smooth={true}>Best Paper Award</Link>
              <Link to="/#contact" spy={true} smooth={true}>Contact Us</Link>
              </div>
            </div>
          </div>

          <button className="hamburger1" onClick={navShow}> {isOpen?<MenuOpenIcon fontSize="large"/>:<MenuIcon fontSize='large'/>}</button>
          <ul className='hamMenu1'>
              <li><Link activeClass="active" to="/#home" spy={true} smooth={true} onClick={()=>{navShow()}}>Home</Link></li>
              <li><Link to="/#aboutAkg" spy={true} smooth={true} onClick={()=>{navShow()}}>About AKGEC</Link></li>
              <li><Link to="/#call" spy={true} smooth={true} onClick={()=>{navShow()}}>Call for Papers</Link></li>
              <li><Link to="/#committee" spy={true} smooth={true} onClick={()=>{navShow()}}>Technical Committee</Link></li>
              <li><Link to="/programme-committee" spy={true} smooth={true} onClick={()=>{navShow()}}>Programme Committee</Link></li>
              <li><Link to="/#keynote" spy={true} smooth={true} onClick={()=>{navShow()}}>Keynote Speakers</Link></li>
              <li><Link to="/important-dates" spy={true} smooth={true} onClick={()=>{navShow()}}>Important Dates</Link></li>
              <li><Link activeClass="active" to="/#paper" spy={true} smooth={true} onClick={()=>{navShow()}}>Paper Submission</Link></li>
              <li><Link to="/#home" spy={true} smooth={true} onClick={()=>{navShow()}}>Best Paper Award</Link></li>
              <li><Link to="/#contact" spy={true} smooth={true} onClick={()=>{navShow()}}>Contact Us</Link></li>
          </ul>

        </div>
        <div className='navfix'>.</div>
    </>
  )
}

export default Navbar