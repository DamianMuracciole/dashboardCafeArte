import Navbar from "./components/navBar";
import ProductsList from "./components/ProductsList";
import UsersList from "./components/UsersList";
import Home from "./components/Home"
import ProductsId from "./components/ProductsId";
import UserId from "./components/UserId";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
function App() {
   return (
    <Router>
     <div className="container"> 
      <Navbar brand="Dashboard Cafe Arte "/>
     <div className="btn-group mt-5">
      <div>
      <Link to="/" className="btn btn-dark m-2">Home</Link>
      <Link to="/ProductsList" className="btn btn-dark m-2">Lista de Productos</Link>
      <Link to="/UsersList" className="btn btn-dark m-2">Lista de Usuarios</Link>
      </div>
    </div>
       <Switch>
           <Route path="/" exact>
            <Home/>
           </Route>
           <Route path="/ProductsList/:id">
            <ProductsId/>
           </Route>
           <Route path="/ProductsList" exact>
            <ProductsList/>
           </Route>
           <Route path="/UsersList" exact>
            <UsersList/>
           </Route>
           <Route path="/UsersList/:id">
            <UserId/>
           </Route>
       </Switch>
       
     </div>
    </Router>
    
 
  );
  }

export default App;
