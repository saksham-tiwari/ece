import React from 'react'
import glimpses from './assets/glimpses.png'
import akg from './assets/akg.png'
import one from "./assets/1.png"
import two from "./assets/2.png"
import three from "./assets/3.png"
import four from "./assets/4.png"
import five from "./assets/5.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import e1 from "./assets/e1.png"
import e2 from "./assets/e2.png"
import e3 from "./assets/e3.png"
import e4 from "./assets/e4.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from './Navbar'
import Footer from './Footer'
import { Link as L } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Homepage = () => {
  return (
    <>
        <Navbar/>
        <div className="imgmain" id="home">
          <h1>
              Advances in Communication,
              Electronics & Computing 
              (ICACEC-2023)
          </h1>
          <p>Organised by AKGEC Ghaziabad & Elsevier
          <br></br>
          <b>March 21-22, 2023</b></p>
          <button><L to="registration">Register <ArrowForwardIcon/></L></button>

        </div>
        <div className="gradient"></div>
        <div className='about' id="about">
          <h1>About Conference</h1>
          <p>
          An online peer reviewed international conference on Advances in Communication, Electronics & Computing -2023 (ICACEC-2023) is scheduled to be held during (March 21-22, 2023) at Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh, India. ICACEC-2023 seeks to provide an open communication platform to discuss and exchange futuristic trends and high-quality research in the field of Electronics & Communication Engineering among researchers, academicians, industrial professionals and students and also bring together people from all different geographical areas who share a common discipline or field. The primary goal of the conference is to promote research and development activities needed for the next generation and focused on all promising areas of Electronics & Communication Engineering. Several renowned experts from the Electronics & Communication Engineering will share their knowledge and experience with the participants. 
          </p>
          {/* <button className='readMore'>Read More...</button> */}
        </div>
        <div className='glimpse'>
          <h1 className="heading">GLIMPSES OF PREVIOUS CONFERENCE</h1>
          <img src={glimpses} alt="Glimpse"/>
          
          <div>
          <img src={glimpses} alt="Glimpse"/>

          </div>
        </div>

        <div className='aboutAkg' id="aboutAkg">
          <div>
            <h1>About AKGEC</h1>
            <p>Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J.
              Abdul Kalam Technical University, Lucknow, India and is approved by the All-India
              Council for Technical Education. The college was established in 1998 and offers B. Tech
              Courses in ten disciplines of Engineering. The College also offers M. Tech in Computer
              Science & Engineering, Electronics  & Communication Engineering, Electrical &
              Electronics Engineering, Mechanical Engineering and Automation & Robotics. The college strives for excellence and has been consistently maintaining excellent academic results and placements.</p>
            <button className='readMore'><L to="/about" style={{color:"#040404"}}>Read More...</L></button>
          </div>
          <div>
          <img src={akg} alt="AKGEC"/>
          {/* <div className='akgborder'>
            <img src={akg} alt="AKGEC"/>
          </div> */}
          </div>
        </div>

        <div className='skillCentre'>
            <h1 className="heading">AKGEC SKILL CENTRE</h1>
            <div className='imgflex'>
              <img src={one} alt="one"/>
              <img src={two} alt="two"/>
              <img src={three} alt="three"/>
              <img src={four} alt="four"/>
              <img src={five} alt="five"/>

              <p style={{width:'90%',lineHeight:'1.5', textAlign:"justify"}}>
              The efforts of the college to bridge the gap between academic curriculum and industry requirements through these centers of Excellence & Competence have been recognized and the college is the recipient of the CMAI Best Industry Interface award from the Hon'ble Minister of Science & Technology, Government of Uttar Pradesh, India. AKGEC in its endeavor to promote technical competency of engineering graduates, Diploma and ITI candidates and has established Skill Development Centre in collaboration with National Skill Development Corporation (NSDC), Ministry of Skill Development & Entrepreneurship, Govt. of India under AKGEC Skills Foundation. This initiative is supported by reputed <b>multinational industries of Europe like SIEMENS, Fronius, Messer and Carl Zeiss</b> as per the International didactic concepts. This center has world class State-of-the-art infrastructure and facilities to train young Engineers, Polytechnic and ITI candidates in the field of conventional and computer aided manufacturing, robot assisted manufacturing, robotic manufacturing, manual & robotic arc welding, non-destructive testing (NDT) and high-end reverse engineering processes.<br/><br/>

              The college has established the <b>Software Development Centre ,Big Data Centre of Excellence and Open Source Software Research & Development lab.</b> These centers are run and managed entirely by the students to promote software development for the college as well as external clients, conduct training programs in various technologies and host competitions.<br/><br/>
              In addition, AKGEC has established<b> IDEA Lab (Innovation, Development of Entrepreneurship and Application Lab)</b> in the year 2017. The basic objective of IDEA Lab is to be an establishing technical business incubator for entrepreneurship development and innovation, which enables establishing new enterprises, creating new job positions, as well as developing new IDEAs and technologies. The Business Incubator Centre has the tools, expertise, mentors and experience to help early age start-ups and ideas. IDEA Lab is developed to support every small or medium size business idea, innovation, entrepreneurship and start-ups in the college.<br/><br/>

              </p>
            </div>
        </div>

        <div className='callForPapers' id='call' style={{paddingTop:"100px"}}>
          <h1 className="heading">CALL FOR PAPERS</h1>
          <p style={{width:'90%',lineHeight:'1.5', textAlign:"justify", marginLeft:"5%"}}>The contributing papers are invited to the following broad categories but are not limited.</p>
          <div style={{textAlign:"left"}}>
            <span>Optical Networks & Systems</span>
            <span>RF & Microwave Devices</span>
            <span>Optical Communication</span>
            <span>VLSI Design</span>
            <span>IC design</span>
            <span>Mobile Computing</span>
            <span>Signal and Image Processing</span>
            <span>Video Coding</span>
            <span>Wireless and Satellite Communications</span>
            <span>Cognitive Radio Networks</span>
            <span>Wireless Sensor Networks</span>
            <span>RFID Technology</span>
            <span>Software Defined Radio</span>
            <span>Next Generation Networks</span>
            <span>Adhoc Networks</span>
            <span>Multimedia Communication</span>
            <span>OFDM & CDMA</span>
            <span>Big Data</span>
            <span>Intelligent Vehicular System</span>
            <span>WiMAX, WLAN and WPAN</span>
            <span>Artificial Intelligence</span>
            <span>4G/5G Systems</span>
            <span>IoT & Smart Systems</span>
            <span>Cloud Computing</span>
            <span>Machine learning & deep learning</span>
          </div>
        </div>

        <div className='committee' id="committee" style={{paddingTop:"100px"}}>
          <h1 className="heading">COMMITTEE</h1>
          {/* <div> */}
          <Table responsive striped size='md' bordered>
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

          {/* </div> */}
        </div>
        
        <div className='keynote' id="keynote" style={{paddingTop:"100px"}}>
          <h1 className="heading">KEYNOTE SPEAKER</h1>
          <div className='imgframe'>
            <div>
              <img src={e1} alt="Speaker1"/> 
              <h2>Dr. Subimal Majee</h2>
              <p>
                (PhD from Ecole Polytechnique, France)
                Research scientist  at RISE, Sweden 
              </p>
            </div>
            <div>
              <img src={e2} alt="Speaker2"/> 
              <h2>Dr. Arijit Roy</h2>
              <p>
                (PhD from IIT Bombay)
                Research Professor at Kookmin University, 
                South Korea
              </p>
            </div>
            <div>
              <img src={e3} alt="Speaker3"/> 
              <h2>Dr. Mrinal Kanti Biswas</h2>
              <p>
                (PhD from IIT Kharagpur)
                Associate Professor, IIT Kharagpur
              </p>
            </div>
            <div>
              <img src={e4} alt="Speaker4"/> 
              <h2>Dr. Lalat Indu Giri</h2>
              <p>
                (PhD from IIT Kanpur)
                Assistant Professor, NIT Goa
              </p>
            </div>
          </div>
        </div>

        <div className='paper' id="paper" style={{paddingTop:"100px"}}>
          <h1 className="heading">PAPER SUBMISSION</h1>
          <p style={{textAlign:"justify"}}>
            The authors are invited to submit the research papers of a minimum of 4 pages in format (A maximum of 6 pages including Figures, Tables, and References will be in the registration fee and additional pages will be charged separately). The papers will be peer-reviewed and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings. <br/><br/>

            The papers should be submitted in 1 column of Elsevier standard format in word .doc or .pdf format only. The authors are requested not to prefix their credentials, i.e. Dr., Prof., etc. in the author's name. All manuscripts should be prepared in the Elsevier conference template. The template can be downloaded from the below link. Authors are requested to use "US letter" as the Elsevier format.
          </p>
        </div>

        <div className='contact' id="contact" style={{paddingTop:"100px"}}>
          <h1 className="heading">CONTACT US</h1>
          <div>
          <div>
            <section className="firstIcon"><LocationOnOutlinedIcon className="iconContact" /></section><p style={{position:"relative",left:"30px",top:"-14px"}}>27th Km Stone, Delhi-Hapur Bypass Road,
            P.O. Adhyatmik Nagar, Ghaziabad - 201009</p>
          </div>

          <div>
            <section className="firstIcon"><LocalPhoneOutlinedIcon className="iconContact" /></section><p style={{position:"relative",left:"30px",top:"-14px"}}>8744052891-93
            7290034978</p>
          </div>
          {/* <br/> */}
          <div>
            <section><EmailOutlinedIcon className="iconContact" /></section><p style={{position:"relative",left:"30px",top:"-14px"}}>info@akgec.ac.in</p>
          </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <Footer/>
    </>
  )
}

export default Homepage