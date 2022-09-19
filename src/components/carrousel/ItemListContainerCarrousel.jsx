import React, { useState, useEffect } from 'react';
import ItemListCarrousel from './ItemListCarrousel';
import { data } from '../mock/Api';

export default function ItemListContainerCarrousel() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        data
            .then((res) => setItems(res))
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


