import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css' 
import "./Home.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faGithub, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Container} from 'react-bootstrap'
const Home = () => {
  return (

    <div className="hero">
      <div className="content">
        <h1>Manav Ajmera</h1>
        <Container>
        <div className= "singleCol social-media-icons-white d-flex justify-content-evenly">
          <a href="mailto:manavajmera03@gmail.com">
            <FontAwesomeIcon icon={faEnvelope}/>
        </a>
          <a href="https://github.com/Manavv20">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href="https://twitter.com/home">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href="https://www.linkedin.com/in/manav-ajmera20/">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
