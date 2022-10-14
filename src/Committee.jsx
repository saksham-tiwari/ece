import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Table } from 'react-bootstrap'
import { list } from './assets/list'


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
        <h1 className='heading' style={{textAlign:"center"}}>ADVISORY & TECHNICAL /REVIEWER COMMITTEE (NATIONAL)</h1>
        <br/>
        <Table responsive striped size='md' bordered style={{width:"95%", marginLeft:"2.5%"}}>
          <tbody>
          {list.map((l,i)=>{
            if(i%2===0&&i!==0) return (<tr>
            <td>{l}</td>
            <td>{list[i+1]}</td>
            </tr>)
          })}
          </tbody>
        </Table>
        <Footer/>
    </>
  )
}

export default Committee