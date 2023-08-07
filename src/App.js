import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
// import Footer from "./components/Footer";
import Contact from './components/Contact';
// import "./App.css" 


function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Work/>
    <Education/>
    <Skills/>
    <Portfolio/>
    <Contact/>

    </div>
  );
}

export default App;
