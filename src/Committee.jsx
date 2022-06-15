import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Table } from 'react-bootstrap'


const Committee = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <>
        <Navbar/>
        <br></br>
        <br></br>
        <h1 className='heading' style={{textAlign:"center"}}>PROGRAMME COMMITTEE</h1>
        <br/>
        <div style={{width:"95%", marginLeft:"2.5%"}}>
            <h3 className='committee-head'>CHEIF PATRONS</h3>
            <table className='committee-table committee-content'>
                <tbody>
                    <tr>
                        <td>Dr. R. K. Agarwal</td>
                        <td>Shri Vinay Garg</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>PATRONS</h3>
            <h2 className='committee-content'>Prof. (Dr.) P. K. Chopra</h2>
            <h3 className='committee-head'>CONVENER</h3>
            <h2 className='committee-content'>Prof. (Dr.) Neelesh Kumar Gupta </h2>
            <h3 className='committee-head'>ORGANIZING SECRETARY</h3>
            <table className='committee-table committee-content'>
                <tbody>
                    <tr>
                        <td>Dr. Amit Garg</td>
                        <td>Dr. Kousik Midya</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>ORGANIZING COMMITTEE </h3>
            <table className='committee-table committee-content'>
                <tbody>
                    <tr>
                        <td>Mr. Naresh Kumar</td>
                        <td>Mr. Dushyant Singh Chauhan</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>BUDGET & FINANCE COMMITEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Prof. Neelesh Kumar Gupta</td>
                        <td>Mr. Himanshu Nagpal</td>
                    </tr>
                    <tr>
                        <td>Mr. Naresh Kumar</td>
                        <td>Mr. Om Krishna Gupta</td>
                    </tr>
                    <tr>
                        <td>Mr. Alok Kumar</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>PUBLICITY COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Mr. Gagandeep Singh</td>
                        <td>Ms. Nilufar Yasmin</td>
                    </tr>
                    <tr>
                        <td>Mr. Neeraj Sharma</td>
                        <td>Mr. Abhishek Tiwari</td>
                    </tr>
                    <tr>
                        <td>Ms. Anu Goel</td>
                        <td>Ms. Renu Sharma</td>
                    </tr>
                    <tr>
                        <td>Ms. Pragya Srivastava</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>TECHNICAL PROGRAM AND WEBSITE MANAGEMENT COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Prof. Neelesh Kumar Gupta</td>
                        <td>Mr. Naresh Kumar</td>
                    </tr>
                    <tr>
                        <td>Mr. Dushyant Singh Chauhan</td>
                        <td>Dr. Kousik Midya</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>REVIEW COMMITEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Dr. Neelesh Kr. Gupta</td>
                        <td>Dr. Seema Garg</td>
                    </tr>
                    <tr>
                        <td>Dr. Meenakshi Awasthi</td>
                        <td>Dr. Amit Garg</td>
                    </tr>
                    <tr>
                        <td>Dr. Jitender Chhabra</td>
                        <td>Dr. Kousik Midya</td>
                    </tr>
                    <tr>
                        <td>Dr. Aruna Tyagi</td>
                        <td>Dr. Karunesh Srivastava</td>
                    </tr>
                    <tr>
                        <td>Dr. Abhijeet Upadhyay</td>
                        <td>Ms. Pragya Srivastava</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>INDUSTRIAL COLLABORATION COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Dr. Meenakshi Awasthi</td>
                        <td>Dr. Seema Garg</td>
                    </tr>
                    <tr>
                        <td>Dr. Karunesh Srivastava</td>
                        <td>Dr. Kousik Midya</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>REGISTRATION COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Mr. Naveen Kr. Saini</td>
                        <td>Ms. Pragya Srivastava</td>
                    </tr>
                    <tr>
                        <td>Ms. Anu Goel</td>
                        <td>Ms. Renu Sharma</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>DECORATION COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Dr. Seema Garg</td>
                        <td>Ms. Tukur Gupta</td>
                    </tr>
                    <tr>
                        <td>Ms. Neha Garg</td>
                        <td>Ms. Priyanka Sharma</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>DICE MANAGEMENT COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Dr. Meenakshi Awasthi</td>
                        <td>Dr. Aruna Tyagi</td>
                    </tr>
                    <tr>
                        <td>Ms. Richa Sharma</td>
                        <td>Ms. Uma Sharma</td>
                    </tr>
                    <tr>
                        <td>Ms. Nilufar Yasmin</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>CERTIFICATE PRINTING, PREPARATION AND DISTRIBUTION COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Ms. Richa Sharma</td>
                        <td>Ms. Uma Sharma</td>
                    </tr>
                    <tr>
                        <td>Ms. Pragya Srivastava</td>
                        <td>Ms. Tukur Gupta</td>
                    </tr>
                </tbody>
            </table>
            <h3 className='committee-head'>REGISTRATION KIT AND FLEX PRINTING COMMITTEE</h3>
            <table className='committee-table'>
                <tbody className='committee-content'>
                    <tr>
                        <td>Mr. Abhishek Tiwari</td>
                        <td>Mr. Neeraj Sharma</td>
                    </tr>
                    <tr>
                        <td>Mr. Naveen Saini</td>
                        <td>Mr. Himanshu Nagpal</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <br/>
        <h1 className='heading' style={{textAlign:"center"}}>ADVISORY COMMITEE</h1>
        <br/>
        <Table responsive striped size='md' bordered style={{width:"95%", marginLeft:"2.5%"}}>
          <tbody>
            <tr>
              <td> Dr.  Debashree Banerjee (Principal Research Engineer, Linköping University, Sweden)</td>
              <td> Dr. Sanjeev Yadav (Women’s Govt College, Ajmer)</td>
            </tr>
            <tr>
              <td>
              Dr.  Sandipta Roy (Staff Engineer at Western Digital Bengaluru, Karnataka, India)
              </td>
              <td>
              Dr. A. K. Singh, HoD, EC, REC, Kannoj
              </td>
            </tr>
            <tr>
              <td>
              Dr. Sangita Chakiroy (Scientist II- Institute of Microelectronics, Agency for Science Technology & Research A*Star, Singapore)
              </td>
              <td>
              Dr Supratimmitra (Banasthali University)
              </td>
            </tr>
            <tr>
              <td>
              Dr. N.S. Raghava (Prof. & HoD ECE, DTU, Delhi)
              </td>
              <td>
              Dr. Garima Mathur (HoD, ECE, Poornima College of Engineering, Jaipur)
              </td>
            </tr>
            <tr>
              <td>
              Dr. Mirza Tariq Beg (Prof. ECE, Jamia Millia Islamia, New Delhi)
              </td>
              <td>
              Mr. Amit Tiwari, Senior Project Manager, BEL, Ghaziabad
              </td>
            </tr>
            <tr>
              <td>
              Dr. Mainuddin, (Prof. ECE, Jamia Millia Islamia, New Delhi)
              </td>
              <td>
              Dr. B. K. Gupta, Director, Barnett Pvt. Limited, Greater Noida
              </td>
            </tr>
            <tr>
              <td>
              Dr. Ajay Somkunwar (Professor ECE, MANIT, Bhopal)
              </td>
              <td>
              Dr. R. L. Sharma, Prof. & BSF Communication Branch, Delhi
              </td>
            </tr>
            <tr>
              <td>
              Dr.  Roopam Gupta (Professor, UIT RGPV, Bhopal)
              </td>
              <td>
              Mr. Sanjay Giri , AGM, ALTTT Centre, Ghaziabad
              </td>
            </tr>
            <tr>
              <td>
              Dr. Sanjay Sharma (Professor & HoD, ECE, UIT RGPV, Bhopal)
              </td>
              <td>
              Mr. Nitin Garg, AGM, ALTTT Centre, Ghaziabad
              </td>
            </tr>
            <tr>
              <td>
              Dr. Jitendra Agarwal (UIT RGPV, Bhopal)
              </td>
              <td>
              Mr. Sandeep,  ALTTT, AGM Centre, Ghaziabad
              </td>
            </tr>
            <tr>
              <td>
              Dr. Piyush Shukla (UIT RGPV, Bhopal)
              </td>
              <td>
              Mr. Naresh ALTTT, AGM Centre, Ghaziabad
              </td>
            </tr>
            <tr>
              <td>
              Dr. Vineet Khandelwal, JIIT, Noida
              </td>
              <td>
              Dr. Asish Kumar Dhara, NIT Durgapu
              </td>
            </tr>
            <tr>
              <td>
              Dr. Sudip Nag, IIT Kharagpur
              </td>
              <td>
              Dr.  Rikmantra  Basu, NIT Delhi
              </td>
            </tr>
          </tbody>
        </Table>
        <Footer/>
    </>
  )
}

export default Committee