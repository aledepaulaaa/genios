import Image from "next/image"
import { Space_Mono } from "next/font/google"
import { Box, Grid, Typography } from "@mui/material"
import ListaDeVantagens from "../components/ListaDeVantagens"
import jovensestudantes from "../assets/img/antiplagio/jovens_estudantes.jpg"

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

export default function AntiPlagio() {
    return (
        <Grid item xs={12}>
            <Grid item xs={12} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Typography
                    variant="h3"
                    fontFamily={spaceMono.style.fontFamily}
                    textTransform="uppercase"
                    sx={{ borderRadius: 2, color: "black", marginBottom: 4 }}>
                    Anti-Plágio
                </Typography>
                <Typography variant="body1" fontWeight="bold" textAlign="center">
                    Garantimos a segurança <br />em seus projetos com
                    nosso sistema
                </Typography>
                <Typography width="50%" mt={2} textAlign="center">
                    Para garantir a originalidade dos trabalhos, utilizamos o
                    <span
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            marginRight: 4,
                            marginLeft: 4
                        }}
                    >
                        CopySpider Premium,
                    </span> um dos softwares anti-plágio mais
                    avançados e utilizados no mercado acadêmico.
                    Escolha a Gênios Acadêmicos para um trabalho exclusivo,
                    livre de plágio e com a segurança de um sistema de ponta.
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                mt={10}
                gap={2}
                p={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection={{ xs: "column", md: "row" }}
            >
                <Grid item xs={12} md={6}>
                    <ListaDeVantagens />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image
                        src={jovensestudantes}
                        alt="Jovens estudantes"
                        width={800}
                        height={800}
                        style={{ width: "100%", height: "auto", borderRadius: 14 }}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}