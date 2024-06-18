import "./navbar.css"
import React from "react"

const NavBar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-ul'>
          <li>Inicio</li>
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Habilidades</li>
          <li>Experiencia</li>
          <li>Contacto</li>
        </ul>
      </nav> 
    )
}

export default NavBar;
