import Helado from "../components/Helado";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
const Helados = () => {
    const [datos, setDatos] = useState([]);
    const { idGustos } = useParams();

    useEffect(() => {
        const fetchFromFirestore = async () => {
            let q;
            if (idGustos) {
                q = query(collection(db, 'productos'), where('categoria', '==', parseInt(idGustos)))
            } else {
                q = query(collection(db, 'productos'));

            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            return dataFromFirestore;
        }
        fetchFromFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idGustos]);

    const deleteItem = (id) => {
        let newData = datos.filter(item => item.id !== id)
        setDatos(newData)
    }
    return (
        <div className="row">
            {
                datos.map(item => (
                    <div className="col-md-4">

                        <Helado
                            key={item.key}
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