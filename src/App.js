import './App.css';
import {BrowserRouter as Router, Route} from "react-route-dom";
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';


//Route se le pasa la ruta y el componente a ejecutar 
const App = () => (
  <Router>
    <Route  path="/" exact component={ Header }/>
    <Route  path="/personajes" exact component={ Contenedor }/>
    <Route  path="/contacto" exact component={ Contacto }/>
  </Router>
)

export default App;

