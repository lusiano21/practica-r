import { useState } from "react";
import { Link } from "react-router-dom";
const Helado = ({ id, nombre, deleteItem, img, precio, stock, rate }) => {
  const [like, setLike] = useState(rate);

  const rateVideo = () => {
    setLike(like + 1)
  }

  return (
    <div className="card">
      <div>
        <img src={img} alt="imagen" />
      </div>
      <div className="card-body">
        <h3 className="card-title"> <Link to={`/sabores/${id}`}>{nombre}</Link></h3>
        <p>${precio} kg</p>
        <p>{stock} kg</p>
        <span>{like}</span> |<button className="btn btn-outline-secondary" onClick={rateVideo}>Me encanta</button>
        <button className="btn btn-outline-secondary" onClick={() => deleteItem(id)}>No me gusta</button>
      </div>
    </div>
  );
}

export default Helado;