import React from "react"
import Image from "next/image"
import { Space_Mono } from "next/font/google"
import { ETAPAS_GARANTIAS } from "@/@core/data/etapasGarantias"
import ImagemMulher from "../assets/img/garantias/woman_1.png"
import { Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material"

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

export default function Garantias() {
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

    return (
        <Grid container spacing={2} id="garantias">
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
                    Garantias
                </Typography>
                <Typography textAlign="center" fontWeight="bold" color="black">
                    Como funcionam as garantias?
                    <br />Siga as etapas abaixo
                </Typography>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={{ xs: "column", md: "row" }}
                >
                    <Grid item xs={12} md={8}>
                        <Stepper activeStep={activeStep} orientation="vertical" sx={{ p: 2 }}>
                            {ETAPAS_GARANTIAS.map((step, index) => (
                                <Step key={step.label}>
                                    <StepLabel>
                                        <Typography variant="body1" color="black">
                                            {step.label}
                                        </Typography>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography fontWeight="bold" color="black">{step.description}</Typography>
                                        <Box sx={{ mb: 2 }}>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    {index === ETAPAS_GARANTIAS.length - 1 ? 'Finalizado' : 'Próximo'}
                                                </Button>
                                                <Button
                                                    disabled={index === 0}
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    Anterior
                                                </Button>
                                            </div>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === ETAPAS_GARANTIAS.length && (
                            <Paper square elevation={0} sx={{ p: 3, textAlign: "center" }}>
                                <Typography>Reveja novamente</Typography>
                                <Button variant="outlined" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                    Resetar
                                </Button>
                            </Paper>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image
                            src={ImagemMulher}
                            alt="Imagem de uma Mulher Afirmando garantia com o polegar"
                            width={300}
                            height={300}
                            style={{ width: "350px", height: "auto" }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}