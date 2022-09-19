import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    return (
        <>
            <div id="homepic">
                <div id="home">
                    <h1>
                        <span class="titlehome">
                            AliArg
                        </span>
                    </h1>
                    <h2>
                        <span class="titlehome">
                            ENCONTRA TODA LA GAMA DE COMPUTADORAS GAMING
                        </span>
                    </h2>
                    <Button
                        onClick={() => navigate(`/category/all`)}
                        variant="contained"
                        sx={{
                            fontSize: "30px",
                            backgroundColor: "rgb(36 24 64)"
                        }}
                    >
                        SHOP
                    </Button>
                    <h3>
                        <span class="titlehome">
                            Enfocados en rendimiento, estilo y comodidad
                        </span>
                    </h3>
                </div>
            </div>

        </>
    )
}
