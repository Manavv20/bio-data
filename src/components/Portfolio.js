import React from 'react'
import img1 from "../assets/card4.jpg"
import img2 from "../assets/card2.jpg"
import img3 from "../assets/card3.jpg"
import "./Portfolio.css"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div class="container">
        <div class="section-title">
            <h1>Projects</h1>
        </div>

        <div class="row">

            <div class="column">
                
                <div class="effect">
                    <div class="effect-img">
                        <img src={img1} alt="" />
                    </div>
                    <div class="effect-text">
                        <div class="inner">
                          <h2>Ajmera Motors</h2>
                            <p>Corporate Website to Display Products, Services.</p>
                            <div class="effect-btn">
                                <a href="#" class="btn"><i class="fa fa-eye"></i> Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="effect">
                    <div class="effect-img">
                        <img src={img2} alt=""/>
                    </div>
                    <div class="effect-text">
                        <div class="inner">
                            <h2>Portfolio Website</h2>
                            <p></p>
                            <div class="effect-btn">
                                <a href="#" class="btn"><i class="fa fa-eye"></i> GitHub</a>
                                <a href="#" class="btn"><i class="fa fa-eye"></i> Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="effect">
                    <div class="effect-img">
                        <img src={img3} alt=""/>
                    </div>
                    <div class="effect-text">
                        <div class="inner">
                            <h2>Happy Journey</h2>
                            <p>Travel Website</p>
                            <div class="effect-btn">
                                <a href="#" class="btn"><i class="fa fa-eye"></i> Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    </section>
    
  )
}
export default Portfolio;
