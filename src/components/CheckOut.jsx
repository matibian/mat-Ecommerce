import { AccountCircle } from '@mui/icons-material';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../images/logo.png';
import { useForm } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';
import {addDoc, collection, getFirestore}   from 'firebase/firestore';

export default function CheckOut() {

    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [tel, setTel] = useState("")
    const { cart, cartTotal, envio, clear } = useCart();
    const [send, setSend] = useState(false);
    const [idCompra, setIdCompra] = useState();

    const [emailError, setEmailError] = useState(false)
    const [nombreError, setNombreError] = useState(false)
    const [telError, setTelError] = useState(false)


    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(errors);


    
    const {
        rergister,
        handleSubmit, 
    } =useForm

    function finishPurchase() {

        let order = {
            buyer: { name: nombre, phone: tel, email: email },
            carrito: cart,
            total: Number(cartTotal() + envio)
        };
        const db= getFirestore();
        const miCollection = collection(db, 'orders');
        addDoc(miCollection, order). then(({id})=>{
            setIdCompra(id)
        })

        // clear()
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
                                <form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <AccountCircle sx={{ color: 'rgb(36 24 64)', mr: 1, my: 0.5 }} />
                                    <TextField
                                        color="secondary"
                                    
                                        id="input-with-sx"
                                        label="Nombre y apellido"
                                        variant="standard"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        type="text"
                                        error={nombreError}
                                        helperText={"blabla"}
                                    />
                                </Box>
                                <br />
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <ContactPhoneIcon sx={{ color: 'rgb(36 24 64)', mr: 1, my: 0.5 }} />
                                    <TextField 
                                        color="secondary"
                                        id="input-with-sx" 
                                        label="Telefono" 
                                        variant="standard" 
                                        value={tel} 
                                        error={telError}
                                        onChange={(e) => setTel(e.target.value)} 
                                        type="tel" 
                                        />
                                </Box>
                                <br />
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '10vh' }}>
                                    <ContactMailIcon sx={{ color: 'rgb(36 24 64)', mr: 1, my: 0.5 }} />
                                    <TextField 
                                        color="secondary" 
                                        id="input-with-sx" 
                                        label="Email" 
                                        variant="standard" 
                                        value={email} 
                                        error={emailError}
                                        onChange={(e) => setEmail(e.target.value)} 
                                        type="text" />
                                </Box>

                                <Button
                                    disabled={emailError || telError || nombreError}
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    type="submit"
                                    // onClick={finishPurchase}
                                    color="secondary"
                                    sx={{color:"white"}}
                                >
                                    Enviar
                                </Button>
                                </form>
                            </>
                            :
                            <Grid sx={{ padding: '10vh 0' }}>
                                <Typography variant="body2" color="text.primary" sx={{ fontSize: 25, fontWeight: "bold", padding: "5px" }} >
                                    Su pedido esta siendo procesado
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 19, fontWeight: "bold", padding: "5px" }} >
                                    Muchas gracias por su compra
                                </Typography>
                                <br />
                                {!idCompra
                                ? <CircularProgress color="secondary"/>
                                : <Typography variant="body2" color="text.primary" sx={{ fontSize: 15, fontWeight: "bold", padding: "5px" }} >
                                    {"Su id de compra es " + idCompra}
                                </Typography>
                                }
                                
                                <br />
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
