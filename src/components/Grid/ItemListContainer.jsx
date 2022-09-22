import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mock/Api';
import ItemList from './ItemList';
import { db } from '../../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    const { category } = useParams()


    //firebase

    useEffect(() => {
        setLoading(true)
        const products = category ? query(collection(db, "products"), where ("category", "==", category)) :collection(db, "products")
        getDocs(products)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()

                    }
                })
                setItems(list)
                console.log(list)
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [category])


    //mock
    // useEffect(() => {
    //     data
    //         .then((res) => {
    //         if (category){
    //             setItems(res.filter(item => item.category === category))
    //         } else {
    //             setItems(res)
    //         }
    //     })
    //         .catch((err) => console.log(err))
    //         .finally(() => setLoading(false))
    // }, [category])

    return (
        <div style={{ marginLeft: "5%", height: "70vh", overflowY: "scroll" }}>
            <ItemList items={items} loading={loading} />
        </div>
    )
}


