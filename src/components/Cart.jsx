import React from 'react';
import { useContext } from 'react';
import { useCart } from '../context/CartContext';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CardMedia } from '@mui/material';



export default function Cart() {

  const { cart } = useCart();



  console.log('carrito', cart);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          marginLeft: '25%',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 800,
            height: 600,
          },
        }}
      >
        <Paper elevation={3}
              displat= "flex"
            >
          {cart.map((item) => (
            <>
              <CardMedia
                    display="flex"
                    component="img"
                    width="70px" 
                    height="70px"
                    image={item.img}
                    alt="img"
                />
              <p>
              {item.name}
              </p>
              <p>Cantidad:
              {item.quantity}
              </p>
            </>
          )
          )}




        </Paper> />
      </Box>
    </div>
  )
}





