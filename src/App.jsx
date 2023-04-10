import React from 'react';
import Nav from './components/navComponent'
import HeroSection from './components/heroSectionComponent';
import AboutMe from './components/aboutMeComponent';
import Contact from './components/contactComponent';

function App() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <AboutMe/>
      <Contact/>

    </div>
  );
}

export default App;
