import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./About.css"
import img1 from "../assets/manav2.jpeg"
import resume1 from "../assets/ManavResume.pdf"
// import {FontAwesomeIcon} from '@fortawesome/free-regular-svg-icons'
// import {faDownload} from "@fortawesome/free-solid-svg-icons"
const About = () => {
  return (
    <section id="about">
    <div className='about'>
     <div className='about-img'>    
      <img src={img1}></img>
      </div>
   <div className='about-text'> 
      <h2>About Me</h2>
<p>Process Establishment and Management - Experienced in establishing hiring, onboarding, appraisal, retention and succession planning processes; dealing with a rapidly changing business landscape as the company multiplies in engineering capacity in months.</p>

<p>Technology Strategy - Skilled in developing, in coordination with Product teams, an overall strategy for the technology department, setting up phases of delegation in order to support growth.</p>

<p>Coaching and Mentorship - Implemented several performance improvement plans in coordination with engineers to raise performance in technical delivery, attention to detail and communication.</p>
      <h2>Contact Me</h2> 
      <p>Mumbai</p>
      <p>India</p>
      <a href='mailto:manavajmera03@gmail.com'>manavajmera03@gmail.com</a>
      <br></br>
      <br></br>
      <div className='button1'>
      <a href={resume1} target='_blank'> 
        <button src>View Resume</button>
      </a>
      <a href={resume1} download="Resume">
        <button src>Download Resume</button>
      </a>   
       </div>
      </div>
  </div>
  </section>
  )
};
export default About;
