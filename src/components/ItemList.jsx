import React from 'react'
import Item from './Item'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Esqueleto from './Esqueleto';
//import SkeletonCarousel from './SkeletonCarousel';





export default function ItemList({ items,loading }) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4// optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        }
    };

    const skeletonItem = [1,2,3,4]


    return (

        <div>
            <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                draggable={true}
                ssr={true}
            >
                {loading ?
                skeletonItem.map((item) => (
                    <div key={item}>
                        <Esqueleto  />
                    </div>
                ))
                :
                items.map((item) => (
                    <div key={item.id}>
                        <Item item={item} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

