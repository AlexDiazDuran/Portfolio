import React from 'react';
import contactComponent from '../style/contactComponent.css';

function Contact() {
  return (
    <section id='contacto' className="contacto">
    <h2>Contacto</h2>
      <form className="contact-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;