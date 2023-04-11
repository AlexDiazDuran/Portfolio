import React from 'react';
import '../style/navComponent.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Nav;