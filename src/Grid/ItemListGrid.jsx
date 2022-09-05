import React from 'react'
import ItemGrid from './ItemGrid'
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import EsqueletoGrid from './EsqueletoGrid';





export default function ItemListGrid({ items, loading }) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const skeletonItem = [1, 2, 3, 4, 5, 6, 7]


    return (

        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    {loading ?
                        skeletonItem.map((item) => (
                            <Grid item xs={3} key={item}>
                                <EsqueletoGrid />
                            </Grid>
                        ))
                        :
                        items.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.id} padding="0 1vw">
                                <ItemGrid item={item}  />
                            </Grid>
                        ))}
                </Grid>
            </Box>

        </div>
    )
}
