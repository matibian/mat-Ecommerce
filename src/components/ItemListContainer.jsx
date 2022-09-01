import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';
import { data } from './mock/Api';

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    React.useEffect(() => {
        data
        .then((res) => setItems(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[])

    return (

        <ItemList items={items} loading={loading} />

    )
}


