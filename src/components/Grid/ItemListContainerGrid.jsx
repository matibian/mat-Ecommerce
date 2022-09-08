import React, { useState, useEffect } from 'react';
import { data } from '../mock/Api';
import ItemListGrid from './ItemListGrid';

export default function ItemListContainerGrid() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        data
            .then((res) => setItems(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div style={{marginLeft:"25%"}}>
            <ItemListGrid items={items} loading={loading} />
        </div>
    )
}


