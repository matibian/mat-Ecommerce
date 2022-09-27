import { AccountCircle } from '@mui/icons-material';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../images/logo.png';


export default function CheckOut() {

    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [tel, setTel] = useState("")
    const { cart, cartTotal, envio, clear } = useCart();
    const [send, setSend] = useState(false)


    function finishPurchase() {


        let order = {
            buyer: { name: nombre, phone: tel, email: email },
            carrito: [
                cart
            ],
            total: Number(cartTotal() + envio)
        };
        clear()
        console.log(order)
        setSend(true)
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10vh 0',
                textAlign: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                },
            }}
            >

                <Paper elevation={3}>

                    <Grid sx={{ padding: '5vh 10vh' }}>
                        {!send
                            ?
                            <>
                                <Typography variant="body2" color="text.primary" sx={{ fontSize: 25, fontWeight: "bold", paddingBottom: "4vh" }} >
                                    Checkout
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <AccountCircle sx={{ color: 'rgb(36 24 64)', mr: 1, my: 0.5 }} />
                                    <TextField color="secondary" id="input-with-sx" label="Nombre y apellido" variant="standard" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />
                                </Box>
                                <br />
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <ContactPhoneIcon sx={{ color: 'rgb(36 24 64)', mr: 1, my: 0.5 }} />
                                    <TextField color="secondary" id="input-with-sx" label="Telefono" variant="standard" value={tel} onChange={(e) => setTel(e.target.value)} type="text" />
                                </Box>
                                <br />
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '10vh' }}>
                                    <ContactMailIcon sx={{ color: 'rgb(36 24 64)', mr: 1, my: 0.5 }} />
                                    <TextField color="secondary" id="input-with-sx" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                                </Box>

                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={finishPurchase}
                                    sx={{ backgroundColor: "rgb(36 24 64)" }}
                                >
                                    Enviar
                                </Button>
                            </>
                            :
                            <Grid sx={{ padding: '10vh 0' }}>
                                <Typography variant="body2" color="text.primary" sx={{ fontSize: 25, fontWeight: "bold", padding: "5px" }} >
                                    Su pedido esta siendo procesado
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 19, fontWeight: "bold", padding: "5px" }} >
                                    Muchas gracias por su compra
                                </Typography>
                                {/* <CardMedia
                                    component="img"
                                    height= "100"
                                    width="100"
                                    image={logo}
                                    alt="logo"
                                /> */}
                                <br />
                                <img src={logo} alt="logo" width={100} height={75} />
                            </Grid>
                        }
                    </Grid>
                </Paper>
            </Box>

        </>
    )
}
