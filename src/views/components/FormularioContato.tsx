import Image from "next/image"
import SendIcon from "@mui/icons-material/Send"
import ilustracao from "../assets/illustration_svg.svg"
import { Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"

export default function FormularioContato() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Image 
                    src={ilustracao}
                    alt="ilustração"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
                <FormControl fullWidth sx={{ gap: 4 }}>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        placeholder="Nome Sobrenome"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        placeholder="email@examplo.com"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Telefone | WhatsApp"
                        variant="outlined"
                        placeholder="(00) 00000-0000"
                        fullWidth
                        required
                    />
                    <Typography fontWeight="bold" mb={-2}>Qual é o tipo do seu projeto?</Typography>
                    <Select
                        fullWidth
                        labelId="project"
                        id="selectproject"
                        value={''}
                        onChange={() => { }}
                    >
                        <MenuItem value={10}>TCC</MenuItem>
                        <MenuItem value={20}>Trabalho Acadêmico</MenuItem>
                        <MenuItem value={30}>Outro</MenuItem>
                    </Select>
                    <Button
                        endIcon={<SendIcon />}
                        variant="contained"
                        fullWidth
                        sx={{
                            color: "white",
                            mt: 2,
                            border: "1px solid black",
                            borderRadius: 2,
                            p: 2,
                            backgroundColor: "#00ADEF",
                            "&:hover": {
                                backgroundColor: "#FFDE59",
                                color: "black",
                            }
                        }}
                    >
                        Enviar
                    </Button>
                </FormControl>
            </Grid>
        </Grid>
    )
}