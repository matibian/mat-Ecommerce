import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import styled from '@emotion/styled';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';





export default function SearchBar() {

    const [data, setData] = useState(null);
    const navigate = useNavigate()

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    useEffect(() => {
        const products = collection(db, "products")
        getDocs(products)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setData(list)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
        {data ? 
        <Autocomplete
            id="serch_bar"
            options={data}
            getOptionLabel={(option) => option.name}
            onChange={(event, option) => {
                navigate(`/detail/${option.id}`)
            }}
            style={{ width: 300 }}
            renderInput={(params) => {
                const { InputLabelProps, InputProps, ...rest } = params;
                    return <StyledInputBase {...params.InputProps} {...rest} />
            }}
        />
        : 
        <StyledInputBase placeholder={"Cargando..."}/> 
        }
        </>
    )
}
