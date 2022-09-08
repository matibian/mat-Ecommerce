import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { Button, Card } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ItemCount from '../ItemCount';



export default function ItemDetail({ productDetail, loading }) {

  const { img, price, description, stars, name, stock, inicial, more } = productDetail;
  console.log(productDetail)
  return (
    <div>
      {/* <Box
        sx={{
          display: 'flex',
          marginLeft: "2%",
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: "95%",
            height: "150%",
          },
        }}
      > */}
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
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  width="20vh"
                  height= "300px"
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
                    {price}
                  </Typography>
                </CardContent>
                <CardContent sx={{ positition: "relative", bottom: "25px" }} >
                  <Rating name="read-only" value={stars} readOnly precision={0.5} />
                  <br />
                  <br />
                  <ItemCount stock={stock} inicial={inicial} />

                </CardContent>
              </Grid>
              <Typography variant="body2" color="text.primary" sx={{ fontSize: 12, fontWeight: "bold", padding: "5px" }} >
                {more}
              </Typography>
            </Grid>
          </>
        }
      </Paper>
      {/* </Box> */}
    </div>
  )
}
