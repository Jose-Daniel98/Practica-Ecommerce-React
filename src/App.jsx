import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto="¡Bienvenidos al Ecommerce!" />
    </>
  );
}

export default App;
