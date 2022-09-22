import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, IconButton } from '@mui/material';
import ItemModal from './ItemModal.jsx';
import { useCart } from '../../context/CartContext.js';
import { Box } from '@mui/system';



export default function ItemGrid({ item }) {
    const { name, img, price, id, stock } = item
    const [buttonPopup, setButtonPopup] = useState(false)
    const [itemModal, setItemModal] = useState()
    const { addItem } = useCart()


    const onAdd = () => {
        let purchase = {
            id, name, price, stock, img, quantity: 1
        }
        addItem(purchase)
    }


    const handleClick = () => {
        setButtonPopup(true);
        setItemModal(item)
    }

    return (
        <>
            <Card sx={{ width: 220, height: 250 }}>
                <>
                    <Box sx={{height: "125px"}}>
                        <CardMedia
                            component="img"
                            height="125"
                            sx={{objectFit:"scale-down"}}
                            image={img}
                            alt="img"
                        />
                    </Box>
                    <CardContent padding="5px">
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, fontWeight: "bold", padding: "5px" }} >
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" marginBottom="0px">
                            ${price.toLocaleString('de-DE')}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ positition: "relative", bottom: "25px" }} >
                        <Button
                            onClick={() => handleClick()}
                            variant="contained"
                            color="secondary"
                            sx={{ width: "55%", fontSize: "10px", paddingBottom: "2px", color: "white"}}

                        >
                            Detalles
                        </Button>
                        <ItemModal
                            trigger={buttonPopup}
                            setTrigger={setButtonPopup}
                            item={{ ...itemModal }} />
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                            onClick={onAdd}
                        >
                            <AddShoppingCartIcon sx={{ color: "rgb(36 24 64)", paddingTop: "2px" }} />
                        </IconButton>
                    </CardContent>
                    <br />
                    <br />
                </>

            </Card>
        </>
    );

}
