import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addItem } = useContext(CartContext)
  const onAdd = (qty) => {
    alert("Seleccionaste " + qty + "kg");
    setItemCount(qty);
    addItem(item, qty);
  }
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{item.nombre}</h3>
        <img src={item.imgs} alt="imagen" /><p className="card-text">{item.info}</p>
        <p class="card-text"> {item.stock}kg </p>
        <p class="card-text">precio: ${item.precio}</p>
        {
          itemCount === 0
            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            : <Link to='/cart'><button className="btn btn-outline-secondary">Carrito</button></Link>
        }
      </div>

    </div>
  );
}
export default ItemDetail;