import React from 'react';
import '../style/heroSectionComponent.css';

function HeroSection() {
    return (
        <section id='hero' className="hero">
      <div className="hero-content">
        <h1>Alex Diaz Duran</h1>
        <h2>Frontend developer</h2>
        <div className="profile-pic-container">
        <img className="profile-pic" src="/img/Alex.jpg" alt="Mi foto" />
        </div>
      </div>
    </section>
    );
}

export default HeroSection;
