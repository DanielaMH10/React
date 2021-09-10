import React from 'react';
/*import Estudiante from './Estudiante';*/
//import Personajes from './Personajes';
import Formulario from './Formulario';

/*const estudiantes = [
    {
        "nombre": "juan roa",
        "edad": 23,
        "genero": "m"
    },
    {
        "nombre": "valentina rey",
        "edad": 20,
        "genero": "f"
    },
    {
        "nombre": "sebastian delgado",
        "edad": 23,
        "genero": "m"
    },
    {
        "nombre": "juan roa",
        "edad": 28,
        "genero": "m"
    },
    {
        "nombre": "juanes molano",
        "edad": 12,
        "genero": "m"
    },
    {
        "nombre": "juana rojas",
        "edad": 19,
        "genero": "f"
    }
]*/

const personajes = [
    {
        "nombre": "Martha Nielsen",
        "edad": 20,
        "imagen": "https://i.pinimg.com/736x/eb/7b/bd/eb7bbd6d64f309185e53ae51570b6f5c.jpg"
    },
    {
        "nombre": "Jonas kahnwald",
        "edad": 20,
        "imagen": "https://elcomercio.pe/resizer/y3lfR-x8T3ilI9PtTghnCErG2EU=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/N3X6TB5KUJCQDCE4N4I733SRZ4.jpg"
    },
    {
        "nombre": "Noah",
        "edad": 23,
        "imagen": "https://vader.news/__export/1597639815293/sites/gadgets/img/2020/08/17/max_schimmelpfennig.jpg_1356777334.jpg"
    },
    {
        "nombre": "Ulrich Nielsen",
        "edad": 45,
        "imagen": "https://elcomercio.pe/resizer/iEy_nEu7HDPlitozTzFXsnidQk4=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R3XKDSIAPBEEZBAYGM6RR2IXVU.jpg"
    },
    {
        "nombre": "Helge Doppler",
        "edad": 65,
        "imagen": "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/h/hegel-doppler-personaje-dark.jpg"
    },
    {
        "nombre": "Hannah Kahnwald",
        "edad": 40,
        "imagen": "https://elcomercio.pe/resizer/ajdVBghuDBq196M6Q0lffvprGW4=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QQVJ2E6SBBHVPPORY3AQNGQHAM.png"
    }
]

const Contenedor = () => (
    <>
        {
            //personajes.map ( c => <Personajes nombre = { c.nombre} edad = { c.edad} imagen = { c.imagen}/>)
            /*estudiantes.map ( e => <Estudiante nombre = { e.nombre} edad = { e.edad} genero = { e.genero}/>)*/
        }

        <Formulario />
    </>
);

export default Contenedor;