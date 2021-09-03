import React from 'react';
import './Header.css';

const Header = () =>(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" id="navbar-brand" >React </a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/Estudiante.jsx">Students list</a>
        <a className="nav-link active" aria-current="page" href="/Personajes.jsx">characters list</a>
      </div>
    </div>
  </div>
</nav>
)

export default Header;

