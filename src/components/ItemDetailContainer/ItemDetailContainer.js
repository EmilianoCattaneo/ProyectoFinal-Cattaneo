import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();


    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'productos', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProducts(productAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    console.log("ItemDetail:", products)
    return (
        <div className='ItemDetailContainer'>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemDetail {...products} />
            )}
        </div>
    );
}

export default ItemDetailContainer;