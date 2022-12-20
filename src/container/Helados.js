import Helado from "../components/Helado";
import { useEffect, useState } from "react";
import{ data } from "../components/data";
import{fetchData} from"../components/fetchData";
import { useParams } from "react-router-dom";
const Helados = () => {
    const [datos, setDatos] = useState([]);
    const {idGustos} = useParams();

    useEffect(() =>{
    if (idGustos){
        fetchData(2000, data.filter(item => item.categoria == idGustos))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    } else{
        fetchData(2000, data)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }
    }, [idGustos]);

    const deleteItem = (id) =>{
     let newData = datos.filter(item => item.id !== id)
     setDatos(newData)
    }
    return (
        <div className="row">           
             {
            datos.map(item => ( 
            <div className="col-md-4">
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
            </div>
            ))
        }      
        </div>
    );
}
export default Helados;