import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function EsqueletoGrid() {
    return (
        <Card sx={{ width: 220, height: 250 }}>
            <Skeleton variant="rectangular" width={"cover"} height={115} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    <Skeleton />
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12}} >
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </Typography>
            </CardContent>


            <CardContent>
                <Skeleton variant="rounded" width={200} height={25}  />
            </CardContent>
        </Card>
         
    );
}