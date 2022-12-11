import Helado from "../components/Helado";
import{ data } from "../components/data"
const Helados = () => {
    return (
        <>
        {
            data.map(item => ( 
                <Helado
                key={item.id}
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