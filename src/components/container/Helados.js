import Helado from "../Helado";

const Helados = () => {
    return (
        <>
        <Helado 
        nombre="Vainilla"
        img=""
        precio="450"
        rate={2}
        stock="50" />
        <Helado 
        nombre="Chocolate"
        img=""
        precio="450"
        rate={4}
        stock="50" />
        <Helado 
        nombre="Frutilla"
        img=""
        precio="450"
        rate={6}
        stock="50" />
        <Helado 
        nombre="Menta granizada"
        img=""
        precio="450"
        rate={9}
        stock="50" />
        </>
    );
}
export default Helados;