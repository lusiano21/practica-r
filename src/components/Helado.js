import { useState } from "react";

const Helado = ({id,nombre,deleteItem,img,precio,stock,rate}) => {
  const [like,setLike] = useState(rate);
  
  const rateVideo = () =>{
    setLike(like + 1)
  }
  
    return(
      <div>
        <div>
          <img src={img} alt="imagen" />
        </div> 
        <div>
          <h3>{nombre}</h3>
          <p>${precio} kg</p>
          <p>{stock} kg</p>
          <span>{like}</span> |<button onClick={rateVideo}>Me encanta</button>
          <button onClick={() => deleteItem(id)}>No me gusta</button>
        </div>
      </div> 
    );
  }

 export default Helado;