import Helado from "../components/Helado";
import { useState } from "react";
import{ data } from "../components/data"
const Helados = () => {
    const [datos, setDatos] = useState(data);

    const deleteItem = (id) =>{
     let newData = datos.filter(item => item.id !== id)
     setDatos(newData)
    }
    return (
        <>
        {
            datos.map(item => ( 
                <Helado
                key={item.id}
                id={item.id}
                deleteItem={deleteItem}
                nombre={item.nombre}
                img={item.img}
                precio={item.precio}
                rate={item.rate}
                stock={item.stock}
                />

            ))
        }
        </>
    );
}
export default Helados;