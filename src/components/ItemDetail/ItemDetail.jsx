import React, { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount';
import Grid from '@mui/material/Grid';
import './PopupDetail.css'

export default function ItemDetail({ productDetail }) {
    const { img, name, price, description, inicial, stock } = productDetail
    const onAdd = () => {
        console.log("agregado al carrito")
    }
    return (
        <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <CardMedia
                                component="img"
                                height="200"
                                width="40vw"
                                image={img}
                                alt="img"
                            />
                        </Grid>
                        <Grid item xs={6} md={6} style={{ alignItems: 'center' }} >
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16, fontWeight: "bold", padding: "5px" }} >
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, fontWeight: "bold", padding: "5px" }} >
                                    {description}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" marginBottom="0px">
                                    {price}
                                </Typography>
                            </CardContent>
                            <CardContent sx={{ positition: "relative", bottom: "25px" }} >
                                <ItemCount inicial={inicial} stock={stock} onAdd={onAdd} />
                            </CardContent>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
        </div >
    )
}
