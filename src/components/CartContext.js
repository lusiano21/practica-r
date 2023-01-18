
import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const addItem = (item, qty) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    nombre: item.nombre,
                    img: item.img,
                    precio: item.precio,
                    qty: qty
                }
            ]);
        } else {
            found.qty += qty;
            setCartList([...cartList])
        }
    }
    const deleteThis = (id) => {
        const borrador = cartList.filter(item => item.id !== id);
        setCartList(borrador)

    }
    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
    const calcTotalPerItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].precio * cartList[index].qty;
    }
    const calcTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    const removeList = () => {
        setCartList([]);
    }


    return (
        <CartContext.Provider value={{ cartList, addItem, deleteThis, calcItemsQty, calcTotalPerItem, calcTotal, removeList }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;

