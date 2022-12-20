import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import  {fetchData}  from "./fetchData";
import { useParams } from "react-router-dom";
const {data} = require("./data");

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idSabor} = useParams();

    useEffect(() => {
        fetchData(2000, data.find(item => item.id == idSabor))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);
    return (
        <ItemDetail item={dato}/>
    );
}
export default ItemDetailContainer;