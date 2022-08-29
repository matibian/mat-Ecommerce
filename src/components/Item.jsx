import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import img from '../images/placa.jpg'
import ItemCount from './ItemCount';
import Esqueleto from './Esqueleto';



export default function Item({item}) {
    const [loading, setLoading] = useState(true);
    // const [products, setProducts] = useState([]);
    const {id, name, description, stock, inicial, img} = item
    const onAdd = () => {
    console.log('Agregado al carrito item '+{id});
    }

    let cargaProductos = new Promise((res, rej) => {
        setTimeout(() => {
            res(item);
            // rej();
        }, 2000);
    });

    cargaProductos
        .then((res) => {
            setLoading(false);

        });

    return (

        <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
            {loading ? <Esqueleto/> : 
            <>
                <CardMedia
                    component="img"
                    height="200"
                    width="cover"
                    image={img}
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                    <ItemCount stock={stock} inicial={inicial} onAdd={onAdd}/>
                <br/>
                <br/>
            </>
            }   
        </Card>
    );
    
}
