import react from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import skillsComponent from '../style/skillsComponent.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>
      <div className="caja-container">
      <div className="s-container">
        <h2>Lenguajes</h2>
        <div className="skills-container">
          <div className="skill">
            <img src="/img/html-5 (1).png" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <img src="/img/css-3.png" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <img src="/img/js.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <img src="/img/php.png" alt="PHP" />
            <span>PHP</span>
          </div>
        </div>
      </div>
      <div className="f-container">
        <h2>Frameworks</h2>
        <div className="frame-container">
          <div className="skill">
            <img src="/img/atom.png" alt="React" />
            <span>React</span>
          </div>
          <div className="skill">
            <img src="/img/laravel.png" alt="Laravel" />
            <span>Laravel</span>
          </div>
          <div className="skill">
            <img src="/img/bootstrap.png" alt="Bootstrap" />
            <span>Bootstrap</span>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}

export default Skills;
