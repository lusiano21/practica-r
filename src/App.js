import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Helados from "./container/Helados";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/CartContext";
import Cart from "./components/Cart";
const App = () => {
  return(
    <CartContextProvider >
    <BrowserRouter>
    <Navbar /> 
    <h1>Heladeria Bon gust</h1>
    <Routes>
      <Route path="/" element={<Helados/>}/>
      <Route path="/gustos/:idGustos" element={<Helados/>}/>
      <Route path="/sabores/:idSabor" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter> 
    </CartContextProvider>
  );
}

export default App;