
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductList from "./components/ProductList";
import TopBar from './components/TopBar';
import Categories from "./components/Categories";
import Error404 from './components/Error404';
import {Link, Route, Switch} from "react-router-dom";
import UltimoProducto from './components/UltimoProducto';
import ReactBootstrap from './components/ReactBootstrap';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <h1> Dashboard CafeArte</h1>
        <TopBar />
        <ReactBootstrap />
        <Route path="/productos" component={ProductList} />
        <Route path="/categoriasProductos" component={Categories} />
        <Route path="/ultimoProducto" component={UltimoProducto} />
        <Route component={Error404} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
