import React from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Skill from './Skills/Skills';
import Experience from './Experience/Experience';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skill />
      <Experience />
      <Footer />
    </div>
  )
}

export default Home
