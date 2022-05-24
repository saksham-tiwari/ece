import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const ImpDates = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <Navbar/>
      <br></br>
      <br></br>
      <h1 className='heading' style={{textAlign:"center"}}>Important Dates</h1>
      <br/>
      <br/>
      <div className='impDateFlex' style={{}}>
        <div>
        Last date of abstract submission
        <h1>June 15, 2022</h1>
        </div>
        <div>
        Last date of full paper submission
        <h1>June 15, 2022</h1>
        </div>
        <div>
        Notification of acceptance
        <h1>August 15, 2022</h1>
        </div>
        <div>
        Registration and final paper submission of accepted Paper
        <h1>September 25, 2022</h1>
        </div>
      </div>
      <div className='blackDates'>
      <p style={{textAlign:"center"}}>Conference date</p>
      <h1>March 21-22, 2023</h1>
      </div>

      <br/>
      <br/>
      <br/>
      <Footer/>
    </>
  )
}

export default ImpDates