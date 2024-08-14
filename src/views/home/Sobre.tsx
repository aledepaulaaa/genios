import Image from "next/image"
import ilustracao from "../assets/illustration_svg.svg"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { Space_Mono } from "next/font/google"
import { Button, Grid, Typography } from "@mui/material"

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

export default function Sobre() {
    return (
        <Grid
            id="sobre"
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            mt={14}
            sx={{ backgroundColor: "#00ADEF" }}
        >
            <Grid
                item
                xs={12}
                mt={10}
                p={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection={{ xs: "column", md: "row" }}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    borderRadius={2}
                    alignItems="center"
                >
                    <Typography
                        variant="h3"
                        fontFamily={spaceMono.style.fontFamily}
                        textTransform="uppercase"
                        sx={{
                            borderRadius: 2,
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                        Sobre nós
                    </Typography>
                    <Image
                        src={ilustracao}
                        alt="ilustração"
                        width={300}
                        height={300}
                        style={{ width: "80%", height: "auto" }}
                    />
                    <Button
                        variant="contained"
                        endIcon={<WhatsAppIcon />}
                        sx={{
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
                <Grid item xs={12} p={2} md={6}>
                    <Typography variant="body1" color="black">
                        Na Gênios Acadêmicos, nossa missão é transformar o seu percurso acadêmico em uma experiência tranquila e bem-sucedida.
                        Somos uma plataforma especializada em oferecer suporte completo para a realização de trabalhos acadêmicos,
                        desde a elaboração de <b>TCCs, artigos, resumos,</b> até o acompanhamento em estágios e outros projetos.
                        Com uma equipe de profissionais experientes e altamente qualificados,
                        já concluímos mais de <b>2000 trabalhos</b>, e entendemos as exigências do meio acadêmico e
                        nos comprometemos a entregar resultados que superam as expectativas, sempre respeitando prazos e
                        garantindo a originalidade e a qualidade de cada trabalho.
                        Acreditamos que o seu tempo é precioso, e por isso, oferecemos um serviço personalizado e dedicado,
                        permitindo que você possa focar no que realmente importa enquanto cuidamos de todos
                        os detalhes do seu projeto. Seja para atender a demandas específicas ou para lidar com
                        prazos apertados, estamos aqui para apoiar sua jornada acadêmica.
                        Na Gênios Acadêmicos, valorizamos a confiança de nossos clientes e nos orgulhamos de ser parte
                        das suas conquistas. Conte conosco para transformar desafios em realizações e
                        alcançar o sucesso que você merece.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}