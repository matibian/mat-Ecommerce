import React from 'react'
import Item from './Item'
import Grid from '@mui/material/Grid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




export default function ItemList({ items }) {

    const prod = items.map((item) => (
        <div>
            <Item item={item} />
        </div>
    ))
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      

    return (

        <div>
            <Carousel responsive={responsive}>
                {prod}
            </Carousel>
        </div>
    )
}

