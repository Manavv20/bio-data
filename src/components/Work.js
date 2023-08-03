import React from 'react'
import "./Work.css"
import img1 from "../assets/ey.png"
import img2 from "../assets/capgemino.png"
import img3 from "../assets/am.png"
import img4 from "../assets/expertshub.png"
import {faHome} from "@fortawesome/free-regular-svg-icons"

const Work = () => {
  return (
    <section id='work'>
     <h1>Work Experience</h1>
     <div class="wrapper">
    <div class="center-line">
      {/* <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a> */}
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        
        <div class="details">
          <span class="title"><u>Ernst and Young</u></span>
          <span>June 2023 - September 2023</span>
        </div>
        <p><b>Technical Consultant</b></p>
        <p>Provided Technical Expertise (In Java and SQL) and Support for Oracle Fusion Applications and Customising the software as per the needs of the client which reduces their work by 50%.</p>
        <div class="bottom">
          <a href="https://www.ey.com/en_in">Read more</a>
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title"><u>Capgemini</u></span>
          <span>December 2021 - April 2022</span>
        </div>
        <p><b>Software Developer</b></p>
        <p>Developed a Back-end System to fetch the Log Entries for testing the performance of a particular application by
fetching the nature of the error in the action which upscales the efficiency of the product by 30-40%.</p>
        <div class="bottom">
          <a href="#">Read more</a>
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title"><u>Ajmera Motors</u></span>
          <span>May 2020 - August 2020</span>
        </div>
        <p><b>Full Stack Developer</b></p>
        <p>Developed the Official Website for an Automobile Company named Ajmera Motors, which included features such as Product Catalog, Dealer Locator, Online Vehicle Configurator and
tools for scheduling Test Drives and Service Appointments.</p>
        <div class="bottom">
          <a href="#">Read more</a>
       
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title"><u>ExpertsHub</u></span>
          <span>July 2019 - August 2019</span>
        </div>
        <p><b>Software Developer</b></p>
        <p>Developed a Project based on Smart Garbage Management using Internet of Things, the sensor data would then be transmitted wirelessly to a central server which could be monitored by
the government authorities. </p>
        <div class="bottom">
          <a href="#">Read more</a>
        
        </div>
      </section>
    </div>
   
   
  </div>
   </section>
  )
}
export default Work;
