import Image from "next/image"
import SendIcon from "@mui/icons-material/Send"
import ilustracao from "../assets/illustration_svg.svg"
import useFormularioContato from "@/@core/hooks/useFormularioContato"
import { Alert, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import React from "react"

export default function FormularioContato() {
    const { emaildata, setEmailData, success, handleSendEmail } = useFormularioContato()

    const [showOtherField, setShowOtherField] = React.useState(false)

    const handleSelectChange = (e: any) => {
        const value = e.target.value
        setEmailData({ ...emaildata, tipoProjeto: value })

        if (value === "Outros") {
            setShowOtherField(true)
        } else {
            setShowOtherField(false)
            setEmailData({ ...emaildata, tipoProjeto: "" }) // Reseta o campo "Outro" caso seja ocultado
        }
    }

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
                        fullWidth
                        required
                        label="Nome"
                        variant="outlined"
                        placeholder="Nome Sobrenome"
                        value={emaildata.nome}
                        onChange={(e) => setEmailData({ ...emaildata, nome: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        required
                        label="Email"
                        variant="outlined"
                        placeholder="email@examplo.com"
                        value={emaildata.email}
                        onChange={(e) => setEmailData({ ...emaildata, email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Telefone | WhatsApp"
                        variant="outlined"
                        placeholder="(00) 00000-0000"
                        required
                        value={emaildata.telefone}
                        onChange={(e) => setEmailData({ ...emaildata, telefone: e.target.value })}
                    />
                    <Typography fontWeight="bold" mb={-2}>Qual é o tipo do seu projeto?</Typography>
                    <Select
                        fullWidth
                        labelId="project"
                        id="selectproject"
                        value={emaildata.tipoProjeto}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value={10}>TCC</MenuItem>
                        <MenuItem value={20}>Trabalho Acadêmico</MenuItem>
                        <MenuItem value={30}>Artigo</MenuItem>
                        <MenuItem value={40}>Estágio</MenuItem>
                        <MenuItem value={50}>Projetos</MenuItem>
                        <MenuItem value={60}>Monografia</MenuItem>
                        <MenuItem value="Outros">Outros</MenuItem>
                    </Select>
                    {showOtherField && (
                        <TextField
                            fullWidth
                            label="Especifique o tipo de projeto"
                            variant="outlined"
                            placeholder="Digite aqui"
                            value={emaildata.tipoProjeto}
                            onChange={(e) => setEmailData({ ...emaildata, tipoProjeto: e.target.value })}
                        />
                    )}
                    <Button
                        endIcon={<SendIcon />}
                        variant="contained"
                        fullWidth
                        onClick={handleSendEmail}
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
                    {success && (
                        <Alert severity="success" sx={{ mt: 2, alignItems: "center" }}>
                            <Typography fontWeight="bold">
                                Email enviado com sucesso!
                            </Typography>
                        </Alert>
                    )}
                </FormControl>
            </Grid>
        </Grid>
    )
}