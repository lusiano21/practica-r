import { useState } from "react";

const Helado = ({nombre,img,precio,stock,rate}) => {
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
          <span>{like}</span> |<button onClick={rateVideo}>Me encanta</button>
          <h3>{stock} kg</h3>
        </div>
      </div> 
    );
  }

 export default Helado;