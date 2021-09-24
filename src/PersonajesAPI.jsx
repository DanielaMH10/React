import react, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";


class PersonajesAPI extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/DanielaMH10/PersonajesJSON/personajes')
        .then(resp => {
            this.setState({posts: resp.data})
          })
      }     


    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'})
    //     .then(response => response.json())
    //     .then(dataResponse => {
    //         this.setState({
    //             posts: dataResponse
    //         })
    //     });
    // }

    render(){
        const {posts} = this.state
        return (
            <>
            <div>
                {
                    posts.map( u => (
                        <>
                         <div class="card" style={{width: "18rem"}}>
                                    <img className="card-img-top" src={u.imagen} alt="Card image cap" />
                                    <div class ="card-body" key={u.id}>
                                    <h5 className="card-title">Nombre: {u.nombre}</h5>
                                    </div>
                                    <ul class ="list-group list-group-flush">
                                    <li class ="list-group-item">Edad: {u.edad}</li>
                                    </ul>
                                </div>
                        </>
                    ))
                }
            </div>
            </>
        )
    }
}

export default  PersonajesAPI; 
