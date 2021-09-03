import React from 'react';
import PropTypes from 'prop-types';
import './Personajes.css';

const Personaje = ({nombre, edad, imagen}) => (
    <div className="card">
        <div  className="card-body">
            {/* ternario para validar un promp */}
            <h5 className="card-title"> {nombre} </h5>
            <p className="card-text">Edad: {edad} </p>
            <img  className="img" src={imagen}/>
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