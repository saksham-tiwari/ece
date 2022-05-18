import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Registration = () => {
  return (
    <>
        <Navbar/>
        <br></br>
        <br></br>
        <h1 className='heading' style={{textAlign:"center"}}>REGISTRATION</h1>
        <br/>
        <br/>
        <p style={{textAlign:"center"}}>Simple,Transparent pricing</p>
        <div className='box-flex'>
            <div className='box'>
                <div className='blackBox'>Students (UG/PG)</div>
                <p>From India(INR)</p>
                <h1>Rs. 3000</h1>
                <p>From Abroad(USD)</p>
                <h1>$ 100</h1>
            </div>
            <div className='box'>
                <div className='blackBox'>Faculty Members</div>
                <p>From India(INR)</p>
                <h1>Rs. 5000</h1>
                <p>From Abroad(USD)</p>
                <h1>$ 150</h1>
            </div>
            <div className='box'>
                <div className='blackBox'>Industry/Research Professionals</div>
                <p>From India(INR)</p>
                <h1>Rs. 5000</h1>
                <p>From Abroad(USD)</p>
                <h1>$ 150</h1>
            </div>
            <div className='box'>
                <div className='blackBox'>PhD Scholar</div>
                <p>From India(INR)</p>
                <h1>Rs. 4000</h1>
                <p>From Abroad(USD)</p>
                <h1>$ 125</h1>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </>
  )
}

export default Registration