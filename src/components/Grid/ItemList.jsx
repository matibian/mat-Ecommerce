import React from 'react'
import Item from './Item'
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EsqueletoGrid from './EsqueletoGrid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




export default function ItemList({ items, loading }) {



    const skeletonItem = [1, 2, 3, 4, 5, 6, 7, 8]


    return (

        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }} sx={{padding: "5vh 5vw"}} >
                    {loading ?
                        skeletonItem.map((item) => (
                            <Grid item xs={3} key={item}>
                                <EsqueletoGrid />
                            </Grid>
                        ))
                        :
                        items.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id} padding="0 1vw">
                                <Item item={item}  />
                            </Grid>
                        ))}
                </Grid>
            </Box>
            {/* <Stack spacing={2}>
                <Pagination 
                    count={10} 
                    variant="outlined" 
                    shape="rounded" showFirstButton showLastButton
                    />
            </Stack> */}

        </div>
    )
}

