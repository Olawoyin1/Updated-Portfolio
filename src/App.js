import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Skills from './Skill/Skills.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';
import React from 'react';





function App() {

  const [toggle, setToggle] = React.useState(false)

  const handleToggle =()=>{
    setToggle(!toggle)
  }

  const styles = {
    backgroundColor: toggle ? '#171717' : '#FAFAFA',
    color: toggle ? '#FFFFFF' : '#333333',
  }


  return (
    <main className={toggle ? "dark" : "light"}>
      <Navbar 
        handleToggle={handleToggle} 
        toggle={toggle} 
        style={styles}
      />
      <Hero style={styles}/>
      <About style={styles}/>
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
   
  );
}

export default App;
