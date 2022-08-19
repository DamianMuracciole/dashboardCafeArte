
import './App.css';
import { Route, Link, Switch } from "react-router-dom"
import Home from './components/Home';

import NotFound from './components/NotFound';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Lista de Productos</Link></li>        
        <li><Link to="/no-existe">No Existe</Link></li>
      </ul>

      <Switch>

        <Route exact path="/" component={Home} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/productos" component={Productos} />   
                
        <Route component={NotFound} />

      </Switch>

    </div>
  );
}

export default App;
