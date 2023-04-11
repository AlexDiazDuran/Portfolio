import React from 'react';
import Nav from './components/navComponent'
import HeroSection from './components/heroSectionComponent';
import AboutMe from './components/aboutMeComponent';
import Contact from './components/contactComponent';
import Skills from './components/skillsComponent';

function App() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Contact/>

    </div>
  );
}

export default App;
