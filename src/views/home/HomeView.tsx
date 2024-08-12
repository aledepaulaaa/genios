import { Space_Mono } from "next/font/google"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import FormularioContato from "../components/FormularioContato"
import { Button, Grid, Typography, useMediaQuery } from "@mui/material"

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

export default function HomeView() {
    const isMobile = useMediaQuery("(max-width: 1024px)")

    return (
        <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                flexDirection={{ xs: "column", md: "row" }}
            >
                <Grid item xs={12} md={4} display="flex" alignItems={{ xs: "center", md: "flex-start" }} flexDirection="column">
                    <Typography
                        textTransform="uppercase"
                        fontFamily={spaceMono.style.fontFamily}
                        textAlign={isMobile ? "center" : "left"}
                        sx={{ fontSize: { xs: "2rem", md: "4rem" }, mt: { xs: 10, md: 0 } }}
                    >
                        Precisando de suporte com seu projeto?
                    </Typography>
                    <Typography mt={4}>
                        Nossa equipe de especialistas está pronta para ajudar você a alcançar
                        o sucesso acadêmico. Confie em nós para entregar trabalhos de
                        alta qualidade, personalizados, dentro dos prazos e, o melhor de tudo, sem plágio!
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<WhatsAppIcon />}
                        sx={{
                            width: "50%",
                            mt: 2,
                            p: 2,
                            color: "white",
                            borderRadius: 2,
                            border: "1px solid black",
                            backgroundColor: "green",
                            "&:hover": {
                                backgroundColor: "#FFDE59",
                                color: "black",
                            }
                        }}
                    >
                        Solicitar Orçamento
                    </Button>
                </Grid>
                <Grid item xs={12} md={4} p={2} mt={{ xs: 10, md: 0 }}>
                    <FormularioContato />
                </Grid>
            </Grid>
        </Grid>
    )
}