import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';
import persoanjeDetalle from './PersoanjeDetalle';
import MainManu from './MainMenu';


//Route se le pasa la ruta y el componente a ejecutar 
const App = () => (
  <Router>
    <MainManu />
    <Switch>
    <Route  path="/" exact component={ Header }/>
    <Route  path="/personajes" exact component={ Contenedor }/>
    <Route  path="/personajes/:id" exact component={ persoanjeDetalle }/>
    <Route  path="/contacto" exact component={ Contacto }/>
    <Route  component={() => (
      <h1>Página no encontrada</h1>
    ) }/>
    </Switch>
  </Router>
)

export default App;

