// import React, { useState, useEffect } from 'react';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Rating from '@mui/material/Rating';
// import './PopupDetail.css'
// import { Button } from '@mui/material';
// import ItemModalContainer from './ItemModal.jsx';

// export default function ItemModal({ productDetail }) {
//     const { img, name, price, description, inicial, stock, stars } = productDetail
    

//     console.log(buttonPopup)
//     return (
//         <div>
//             <Grid container spacing={2}>
//                 <Grid item xs={6} md={6}>
//                     <CardMedia
//                         component="img"
//                         height="200"
//                         width="40vw"
//                         image={img}
//                         alt="img"
//                     />
//                 </Grid>
//                 <Grid item xs={6} md={6} style={{ alignItems: 'center' }} >
//                     <CardContent>
//                         <Typography variant="body2" color="text.primary" sx={{ fontSize: 16, fontWeight: "bold", padding: "5px" }} >
//                             {name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, fontWeight: "bold", padding: "5px" }} >
//                             {description}
//                         </Typography>
//                         <Typography gutterBottom variant="h6" component="div" marginBottom="0px">
//                             {price}
//                         </Typography>
//                     </CardContent>
//                     <CardContent sx={{ positition: "relative", bottom: "25px" }} >
//                         <Rating name="read-only" value={stars} readOnly precision={0.5}  />
//                         <br/>
//                         <br/>
//                         <Button onClick={setButtonPopup(true)}
//                             variant="contained" 
//                             style={{
//                                 backgroundColor: "rgb(36 24 64)",
//                                 fontSize: "10px"}}>
//                             Ver más...
                            
//                         </Button>
//                     </CardContent>
//                 </Grid>
//             </Grid>
//             <br />
//             <br />
//         </div >
//     )
// }
