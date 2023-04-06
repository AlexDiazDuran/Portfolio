import React from 'react';
import '../style/aboutMeComponent.css';

function aboutMe() {
    return (
        <section id="about" className="about">
      <div className="about-container">
        <h2>Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Soy un desarrollador frontend con experiencia en la creación de aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript y React. Mi pasión es crear experiencias de usuario atractivas y efectivas</p>
          </div>
        </div>
        <a href="/pdf/CV.pdf" className="about-button" target="_blank" >Visualizar CV</a>

      </div>
    </section>
    );
}

export default aboutMe;
