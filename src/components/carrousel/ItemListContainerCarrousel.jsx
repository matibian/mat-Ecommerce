import React, { useState, useEffect } from 'react';
import ItemListCarrousel from './ItemListCarrousel';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Error from '../Grid/Error';

export default function ItemListContainerCarrousel() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);



    useEffect(() => {
        setLoading(true)
        const products =  query(collection(db, "products"), where ("nov", "==", true)) 
        getDocs(products)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()

                    }
                })
                setItems(list)
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))

    }, [])



    return (
        <>   
        <div id="carrousel"  sx={{ padding: 5 }} >
            <br />
            <div id="titlenovedades">
                NOVEDADES
            </div>
            {!error
            ?<ItemListCarrousel items={items} loading={loading} />
            :<Error/>
            }
        
        </div>
        </>
    )
}


