
import { Link } from "react-router-dom";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { useContext } from "react";
import { db } from "../container/firebaseConfig";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, deleteThis, calcTotalPerItem, calcTotal, removeList } = useContext(CartContext);
    const createOrder = () => {
        const order = {
            buyer: {
                name: 'Lucas',
                email: 'luquitas@gmail.com',
                phone: '1155996644'
            },
            date: serverTimestamp(),
            items: cartList.map(item => ({
                id: item.id,
                title: item.nombre,
                price: item.precio,
                qty: item.qty
            })),
            total: calcTotal()
        }
        console.log(order)
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef
        }
        createOrderInFirestore()
            .then(result => {
                alert("Compraste " + cartList.map(item => item.nombre) + " correctamente")
                cartList.forEach(async (item) => {
                    const itemRef = doc(db, "productos", item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    });
                })
                removeList()
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <h1>Tu carta</h1>
            <Link to='/'><button className="btn btn-outline-secondary">Helados</button></Link>
           
            <div class="card " >
                {
                    cartList.length > 0 &&
                    cartList.map(item =>
                        <div class="card col-8">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={item.img} alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{item.nombre}</h5>
                                        <p class="card-text">cantidad: {item.qty}kg</p>
                                        <p class="card-text">precio:${calcTotalPerItem(item.id)}</p>
                                        <button className="btn btn-outline-secondary" onClick={() => deleteThis(item.id)}>Borrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>)

                }
            
            {
                cartList.length > 0 &&
                <div class="card " >
                    <div class="card-header">
                        Factura
                    </div>
                    <li class="list-group-item">Total: ${calcTotal()}</li>

                    <button className="btn btn-outline-secondary" onClick={createOrder}>Comprar</button>
                </div>
            }
            </div>
        </>
    );
}
export default Cart;