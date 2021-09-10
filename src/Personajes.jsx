import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Personajes.css';

const Personaje = ({nombre, edad, imagen, id}) => (
    <div className="card">
        <div  className="card-body">
            {/* ternario para validar un promp */}
            <h5 className="card-title"> {nombre} </h5>
            <p className="card-text">Edad: {edad} </p>
            <p><Link to={`/personajes/${id}`}>Detalle</Link></p>
            {/*<p className="card-text">Imagen: {Imagen} </p>*/}
        </div>
    </div>
);

Personaje.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    imagen: PropTypes.string
}

Personaje.defaultProps = {
    nombre: "no tiene nombre"
}

export default Personaje;