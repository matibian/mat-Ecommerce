import * as React from 'react';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Divider from '@mui/material/Divider';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({

  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function ItemDetail({ productDetail, loading }) {




  const [count, setCount] = useState(1);
  const [buy, setBuy] = useState(false);
  const { img, price, description, stars, name, stock, inicial, more, id } = productDetail;
  const navigate = useNavigate()
  const { addItem } = useCart()


  const onAdd = () => {
    let purchase = {
      id, name, price, stock, img, quantity: count
    }
    setBuy(true);
    addItem(purchase)
  }






  return (
    <div >
      <Box
        sx={{
          display: 'flex',
          marginLeft: "2%",
          flexWrap: 'wrap',
          justifyContent: "space-evenly",

          '& > :not(style)': {
            m: 1,
            width: "60%",
            height: "150%",
          },
        }}
      >
        <Paper
          elevation={2}
          sx={{
            display: 'absolute',
            //   flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "95%",
              height: "cover",
            },
          }}>
          {loading ?
            <LoadingButton loading sx={{ width: 200, height: 290 }} />
            :
            <>
              <Grid container spacing={5}>
                <Grid item xs={6} md={6}
                >
                  <CardMedia
                    component="img"
                    style={{
                      objectFit: "scale-down",
                      maxHeight: "30vh"

                    }}
                    image={img}
                    alt="img"
                  />
                </Grid>
                <Grid item xs={6} md={6} style={{ alignItems: 'center' }} >
                  <CardContent>
                    <Typography variant="body2" color="text.primary" sx={{ fontSize: 16, fontWeight: "bold", padding: "5px" }} >
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, fontWeight: "bold", padding: "5px" }} >
                      {description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" marginBottom="0px">
                      ${price.toLocaleString('de-DE')}
                    </Typography>
                  </CardContent>
                  <CardContent sx={{ positition: "relative", bottom: "25px", textAlign: "-webkit-center" }} >
                    <Rating name="read-only" value={stars} readOnly precision={0.5} />
                    <div
                      style={{
                        width: "30vh",
                        display: "flex"
                      }}>
                    </div>
                    <Box
                    // sx= {{width: "17vh"}}
                    >
                      {!buy
                        ? <ItemCount stock={stock} inicial={inicial} onAdd={onAdd} count={count} setCount={setCount} />
                        : <>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate(`/cart`)}
                            sx={{ width: "100%", color: "white", height: "40px", fontSize: "12px", margin: "10px" }}
                          >
                            Ir al carrito
                          </Button>
                          <Button
                            onClick={() => navigate(`/category/all`)}
                            color="secondary"
                            variant="contained"
                            sx={{ width: "100%", color: "white", height: "40px", fontSize: "12px", margin: "10px" }}
                          >
                            Seguir comprando
                          </Button>
                        </>}
                    </Box>
                  </CardContent>
                </Grid>


                <Root>
                  <Divider textAlign="left">Detalles</Divider>
                </Root>
                <Typography variant="body2" color="text.primary" sx={{ fontSize: 14, padding: "5vh" }} >
                  {more}
                </Typography>
              </Grid>
            </>
          }
        </Paper>
      </Box>
    </div>
  )
}
