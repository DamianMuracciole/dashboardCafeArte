
import './App.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import { Route, Link, Switch } from "react-router-dom"
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      {/* <Link className="nav-link" to="/usuarios"><span>Lista de Usuarios</span></Link> */}
      
      <div id="wrapper">
        <SideBar/>
        <ContentWrapper/>

        <Switch>		  
		      <Route path="/usuarios" component={UsersList} />
		    </Switch>
      </div>

    </div>
  );
}

export default App;
