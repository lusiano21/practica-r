
import { createContext,useState} from "react";

export const CartContext = createContext();
const CartContextProvider = ({children}) => {
const [cartList, setCartList] = useState([]);
const addItem = (item, qty) => {
 setCartList([
     ...cartList,
     {
        id: item.id,
        nombre:item.nombre,
        img:item.img,
        precio: item.precio,
        qty: qty
     }
])
}
const deleteThis = (id) => {
        const borrador = cartList.filter(item => item.id !==id);
        setCartList(borrador)

}
 
return (
 <CartContext.Provider value={{cartList,addItem,deleteThis}}>
         {children}
 </CartContext.Provider>

  )
}
 
export default CartContextProvider;

