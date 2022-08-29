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
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };




    return (

        <div>
            <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                draggable={true}
                ssr={true} // means to render carousel on server-side.
                // keyBoardControl={true}
                // dotListClass="custom-dot-list-style"
                >
                {prod}
            </Carousel>
        </div>
    )
}

