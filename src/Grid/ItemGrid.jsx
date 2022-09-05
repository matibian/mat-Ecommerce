import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, IconButton } from '@mui/material';



export default function ItemGrid({ item }) {
    const { name, description, stock, inicial, img, price } = item

    const onAdd = () => {
        console.log('Agregaste un item al carrito');
    }



    return (

        <Card sx={{ width: 220, height: 250}}>
            <>
                <CardMedia
                    component="img"
                    height="115"
                    width="90%"
                    image={img}
                    alt="img"
                />
                <CardContent padding="5px">
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, fontWeight: "bold", padding: "5px" }} >
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" marginBottom="0px">
                        {price}
                    </Typography>
                </CardContent>
                <CardContent sx={{positition: "relative", bottom: "25px"}} >
                    <Button variant="contained"
                        sx={{ width: "55%", fontSize: "10px", paddingBottom: "2px", backgroundColor: "rgb(36 24 64)"}}
                        onClick={onAdd}>
                        Detalles
                    </Button>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon sx={{ color: "rgb(36 24 64)", paddingTop: "2px" }} />
                    </IconButton>
                </CardContent>
                <br />
                <br />
            </>

        </Card>
    );

}
