import ItemisContainer from "./components/itemisContainer";
import Navbar from "./components/Navbar";
const App = () => {
  return(
    <div>
    <Navbar />
    <h1>Heladria</h1>
    <h2>Bienvenido</h2>
    <ItemisContainer h1="Chocolate" h2="Vainilla" nombre="Juan" />
    </div> 
  )
}

export default App;