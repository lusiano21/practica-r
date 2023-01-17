import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
 const {cartList,deleteThis}= useContext(CartContext);

 return(
    <>
    <h1>Tu carta</h1>
    <ul>
        {
        cartList.length === 0
        ? <p>Esta vacio</p>
        : cartList.map(item => <li key={item.id}><img src={item.img} alt="" /> -{item.nombre} - cantidad: {item.qty}kg - <button onClick={() =>deleteThis(item.id)}>Borrar</button></li>)
        }
    </ul>
    </>
 );
}
export default Cart;