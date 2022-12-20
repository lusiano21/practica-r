import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Helados from "./container/Helados";
import ItemDetailContainer from "./components/ItemDetailContainer";
const App = () => {
  return(
    <BrowserRouter>
    <Navbar /> 
    <h1>Heladria Bienvenido</h1>
    <h2> Elije cualquier gusto </h2>
    <Routes>
      <Route path="/" element={<Helados/>}/>
      <Route path="/gustos/:idGustos" element={<Helados/>}/>
      <Route path="/sabores/:idSabor" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;