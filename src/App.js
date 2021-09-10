import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-route-dom";
import Contenedor from './Contenedor';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <spam>Hola</spam>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const App = () => (
  <Router>
    <Route  path="/estudiantes" exact component={ Contenedor }/>
  </Router>
)
export default App;
