
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductList from "./components/ProductList";
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <h1> Dashboard CafeArte</h1>
        <TopBar />
        <ProductList />
        <Footer />
      </header>
    </div>
  );
}

export default App;
