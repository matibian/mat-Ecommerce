import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';

export default function ItemCount({ stock, inicial, onAdd }) {
    const [counter, setCounter] = useState(inicial)

    console.log(counter)

    return (
        <div style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>            <CardActions>
            <Stack direction="row" spacing={1} sx={{ paddingTop: "2px" }}>
                <Button variant="outlined"
                    onClick={() => setCounter(counter + 1)}
                    disabled={counter === stock}
                    padding="0 0">
                    <AddIcon />
                </Button>
                <Box style={{ fontSize: 22 }} >
                    {counter}
                </Box>
                <Button variant="outlined"
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter === 0} >
                    <RemoveIcon />
                </Button>
            </Stack>
        </CardActions>
            <Button variant="contained"
                sx={{ width: "95%", fontSize: "12px", paddingBottom: "2px" }}
                disabled={counter === 0}
                onClick={onAdd}>
                Agregar al carrito
            </Button>
        </div>
    );

}
