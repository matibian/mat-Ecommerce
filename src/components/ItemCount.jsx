import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../images/placa.jpg'
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';

export default function ItemCount({ stock, inicial, onAdd }) {
    const [counter, setCounter] = useState(inicial)

    console.log(counter)

    return (
        <div>
            <CardActions>
                <Stack direction="row" spacing={5}>
                    <Button variant="outlined" 
                            onClick={() => setCounter(counter + 1)}
                            disabled={counter===stock}>
                        <AddIcon />
                    </Button>
                    <Box style= {{fontSize: 22}} >
                        Cantidad : {counter}

                    </Box>
                    <Button variant="outlined" 
                            onClick={() => setCounter(counter - 1)} 
                            disabled={counter===0} >
                        <RemoveIcon />
                    </Button>
                </Stack>
            </CardActions>
            <Button variant="contained" 
                    sx={{ width : "95%", height : "30"}}
                    disabled={counter===0}
                    onClick={onAdd}>
                Agregar al carrito
            </Button>
        </div>
    );

}
