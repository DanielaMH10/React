import React from 'react';


let estudiante = {
    nombre: "Maria",
    edad: 23
}

const NuevoElemento = (props) => (
    <div className="contendeor">
        <h3>Estudiante</h3>
        <h4>{ props.nombre }</h4>
        <p>Edad: { estudiante.edad }</p>
    </div>
)

export default NuevoElemento;