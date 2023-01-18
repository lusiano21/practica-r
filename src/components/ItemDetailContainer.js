import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../container/firebaseConfig";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idSabor } = useParams();

    useEffect(() => {
        const fetchOneFromFirestore = async () => {
            const docRef = doc(db, "productos", idSabor);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: idSabor,
                    ...docSnap.data()
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        }
        fetchOneFromFirestore()
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    return (
        <ItemDetail item={dato} />
    );
}
export default ItemDetailContainer;