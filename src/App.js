import Navbar from "./components/Navbar";
import Helados from "./components/container/Helados";
const App = () => {
  return(
    <div>
    <Navbar />
    <h1>Heladria Bienvenido</h1>
    <h2> Elije cualquier gusto </h2>
    <Helados/>
    </div> 
  )
}

export default App;