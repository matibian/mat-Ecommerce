import React, { useState, useEffect } from 'react';
import ItemListCarrousel from './ItemListCarrousel';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function ItemListContainerCarrousel() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);



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
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [])



    return (
        <>   
        <div id="carrousel"  sx={{ padding: 5 }} >
            <br />
            <div id="titlenovedades">
                NOVEDADES
            </div>
            <ItemListCarrousel items={items} loading={loading} />
        </div>
        </>
    )
}


