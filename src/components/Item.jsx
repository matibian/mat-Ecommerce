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
    console.log('Agregaste un item al carrito');
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

        <Card sx={{ width: 330, height: 435 }}>
            {loading ? <Esqueleto/> : 
            <>
                <CardMedia
                    component="img"
                    height="150"
                    width="90%"
                    image={img}
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12}} >
                        {description}
                    </Typography>
                </CardContent>
                <ItemCount stock={stock} inicial={inicial} onAdd={onAdd}  />
                <br/>
                <br/>
            </>
            }   
        </Card>
    );
    
}
