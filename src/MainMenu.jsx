import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const MainManu = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" id="navbar-brand" >React </a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      
      <ul className="navbar-nav">
        <li className="nav-link active" aria-current="page" ><NavLink exact  to="/">Home</NavLink></li>
        <li className="nav-link active" aria-current="page" ><NavLink exact  to="/personajes">Personajes</NavLink></li>
        <li className="nav-link active" aria-current="page" ><NavLink exact  to="/contacto">Contactos</NavLink></li>
    </ul>
      </div>
    </div>
  
</nav>
)

export default MainManu;
