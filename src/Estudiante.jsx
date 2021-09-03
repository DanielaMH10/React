import React from 'react';
import PropTypes from 'prop-types';

const Estudiante = ({nombre, edad, genero}) => (
    <div className="card">
        <div  className="card-body">
            {/* ternario para validar un promp */}
            <h5 className="card-title"> {nombre} </h5>
            <p className="card-text">Edad: {edad} </p>
            <p className="card-text">Genero: {genero} </p>
        </div>
    </div>
);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "no tiene nombre"
}

export default Estudiante;