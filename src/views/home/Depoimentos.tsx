import depoimento1 from "../assets/img/depoimentos/depoimentos_01.jpeg"
import depoimento2 from "../assets/img/depoimentos/depoimentos_02.jpeg"
import depoimento3 from "../assets/img/depoimentos/depoimentos_03.jpeg"
import depoimento4 from "../assets/img/depoimentos/depoimentos_04.png"
import React from "react"
import { Space_Mono } from "next/font/google"
import ImageGallery from "react-image-gallery"
import { Box, Grid, Typography } from "@mui/material"
import "react-image-gallery/styles/css/image-gallery.css"

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

export default function Depoimentos() {
    const [activeStep, setActiveStep] = React.useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const images = [
        {
            original: depoimento1.src,
        },
        {
            original: depoimento2.src,
        },
        {
            original: depoimento3.src,
        },
        {
            original: depoimento4.src,
        }
    ]

    return (
        <Grid container spacing={2} id="depoimentos">
            <Grid
                item
                xs={12}
                mt={10}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Typography
                    variant="h3"
                    fontFamily={spaceMono.style.fontFamily}
                    textTransform="uppercase"
                    sx={{
                        borderRadius: 2,
                        textAlign: "center",
                        color: "black",
                        marginBottom: 4,
                    }}
                >
                    Depoimentos
                </Typography>
                <Typography>
                    Capturas de tela de conversas e feedbacks de clientes satisfeitos.
                </Typography>
                <Box width="100%">
                    <ImageGallery
                        autoPlay
                        items={images}
                        showThumbnails={false}
                        showFullscreenButton={true}
                        showPlayButton={false}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
