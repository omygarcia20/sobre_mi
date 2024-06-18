import React from "react"
import "./body.css"

const Body = () => {
  return (
    <div className='body'>
        <div className='body-card'>
          <img className='body-card-avatar' src="/src/image/image1.png" alt="avatar" />
        </div>
        <div className='body-about'>
          <h2 className='body-about-h2'>Hola, soy Mateo un desarrollador web</h2>
          <p className='body-about-p'><strong>Desarrollo web</strong></p>
          <p className='body-about-p2'>Soy un desarrollador web altamente capacitado con experiencia en el diseño y desarrollo de sitios web y aplicaciones web modernas y receptivas. Poseo sólidas habilidades en HTML, CSS, JavaScript, JSX, React, Git y GitHub. Estoy apasionado por crear experiencias de usuario atractivas y fáciles de usar, y siempre estoy buscando nuevas tecnologías y métodos para mejorar mis habilidades.</p>
        </div>
        <div className='body-skill' >
          <p className='body-skill-p'><strong>Habilidades</strong></p>
          <ul className='body-skill-ul' >
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>JSX</li>
            <li>REACT</li>
            <li>BOOTSTRAP</li>
            <li>TAILWIND</li>
            <li>TERMINAL</li>
            <li>GIT</li>
            <li>GITHUB</li>
          </ul>
        </div>
      </div>
  )
}

export default Body;
