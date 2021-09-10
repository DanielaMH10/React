import React from "react";

const personajes = [

    {
        "id":1,
        "nombre": "Martha Nielsen",
        "edad": 20,
        "genero": "F",
        "descripcion": "Martha Nielsen es la hija de Ulrich y Katharina Nielsen, y la hermana de Magnus y Mikkel Nielsen. Sale con Bartosz y, a la vez, tiene una aventura con Jonas Kahnwald durante un tiempo. Martha creció en Winden, asiste a la escuela secundaria Winden.",
        "imagen": "https://i.pinimg.com/736x/eb/7b/bd/eb7bbd6d64f309185e53ae51570b6f5c.jpg"
    },
    {
        "id": 2,
        "nombre": "Jonas kahnwald",
        "edad": 20,
        "genero": "M",
        "descripcion": "Jonas Kahnwald es el personaje central de la serie. Es el hijo de Michael y Hannah Kahnwald. Como adolescente es una persona reflexiva a quien el suicidio de su padre lo golpea con fuerza, incluso peor después de descubrir su verdadera identidad.",
        "imagen": "https://elcomercio.pe/resizer/y3lfR-x8T3ilI9PtTghnCErG2EU=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/N3X6TB5KUJCQDCE4N4I733SRZ4.jpg"
    },
    {
        "id": 3,
        "nombre": "Noah",
        "edad": 23,
        "genero": "M",
        "descripcion": "El personaje de Noah adulto en Dark, la serie, es interpretado por el actor alemán Mark Waschke, conocido, antes de Dark, por su trabajo en teatro, donde ha interpretado los personajes principales en obras como Macbeth y La Gata sobre el Tejado de Zinc, por mencionar algunas puestas en escena",
        "imagen": "https://vader.news/__export/1597639815293/sites/gadgets/img/2020/08/17/max_schimmelpfennig.jpg_1356777334.jpg"
    },
    {
        "id": 4,
        "nombre": "Ulrich Nielsen",
        "edad": 45,
        "genero": "M",
        "descripcion": "Ulrich Nielsen es el jefe de policía de Winden. Es el marido de Katharina Nielsen y el padre de Magnus Nielsen, Martha Nielsen y Mikkel Nielsen, así como el hermano de Mads Nielsen, desaparecido en 1986. Mantiene una aventura con Hannah Kahnwald.",
        "imagen": "https://elcomercio.pe/resizer/iEy_nEu7HDPlitozTzFXsnidQk4=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R3XKDSIAPBEEZBAYGM6RR2IXVU.jpg"
    },
    {
        "id": 5,
        "nombre": "Helge Doppler",
        "edad": 65,
        "genero": "M",
        "descripcion": "Helge Doppler o simplemente Helge es uno de los personajes principales en Dark, serie alemana producida por Netflix. Es un aparente aliado de Noah, miembro del grupo de viajeros en el tiempo Sic Mundus Creatus Est, que lo obliga a secuestrar niños en Winden para probar una máquina del tiempo.",
        "imagen": "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/h/hegel-doppler-personaje-dark.jpg"
        
    },
    {
        "id": 6,
        "nombre": "Hannah Kahnwald",
        "edad": 40,
        "genero": "F",
        "descripcion": "Hannah Kahnwald (antes llamada Hannah Krüger) es la viuda de Michael y la madre de Jonas. Desde su juventud tuvo una obsesión por Ulrich Nielsen y en 2019, mantiene una aventura con él.",
        "imagen": "https://elcomercio.pe/resizer/ajdVBghuDBq196M6Q0lffvprGW4=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QQVJ2E6SBBHVPPORY3AQNGQHAM.png"
    }

]

const persoanjeDetalle = ({match}) => {
    const personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0];

    return(
        <>
        {
            personaje ? (
        /*{ <h1>{ match.params.id}</h1>);} */
        <div className="card">
        <div  className="card-body">
            {/* ternario para validar un promp */}
            <h5 className="card-title">Nombre: {personaje.nombre} </h5>
            <p className="card-text">Edad: {personaje.edad} </p>
            <p className="card-text">Genero: {personaje.genero} </p>
            <p className="card-text">Descripción: {personaje.descripcion} </p>
            <img  className="img" src={personaje.imagen}/>
            
        </div>
    </div>
            ):
            <h1>El id no esta registrado</h1>
        }
        <a href={`/personajes`}>Ver todos</a>
        </>
    );
    
};

export default persoanjeDetalle;