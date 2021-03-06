import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';
import persoanjeDetalle from './PersoanjeDetalle';
import MainManu from './MainMenu';
import NoFound from './NoFound';
import DatosAPI from './DatosAPI';
import PersonajesAPI from './PersonajesAPI';


//Route se le pasa la ruta y el componente a ejecutar 
const App = () => (
  <Router>
    <MainManu />
    <Switch>
    <Route  path="/" exact component={ Header }/>
    <Route  path="/personajes" exact component={ Contenedor }/>
    <Route  path="/personajes/:id" exact component={ persoanjeDetalle }/>
    <Route  path="/contacto" exact component={ Contacto }/>
    <Route  path="/datos_api" exact component={ DatosAPI }/>
    <Route  path="/personajes_api" exact component={ PersonajesAPI }/>
    <Route  path="*" exact component={ NoFound }/>
    </Switch>
  </Router>
)

export default App;

