import React from 'react';
import '../style/heroSectionComponent.css';

function HeroSection() {
  return (
    <section id='hero' className="hero">
      <div className="hero-content">
        <h1>Alex Diaz Duran</h1>
        <h2>Frontend Developer</h2>
        <div className="profile-pic-container">
          <img className="profile-pic" src="/img/Alex.jpg" alt="Mi foto" />
        </div>
        <div className="social-links-container">
          <a href="https://www.linkedin.com/in/alex-diaz-duran/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/alexdiaz-dev" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

