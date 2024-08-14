import CheckIcon from "@mui/icons-material/Check"
import StarRateIcon from "@mui/icons-material/StarRate"
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material"

export default function ListaDeVantagens() {
    const listaDeVantagens = [
        {
            title: "Detecção Avançada",
            description: "Identifica trechos semelhantes em documentos online e bases de dados acadêmicas, garantindo um trabalho 100% autoral"
        },
        {
            title: "Tecnologia de Ponta",
            description: "Verifica até as mais sutis semelhanças, evitando qualquer tipo de plágio"
        },
        {
            title: "Relatório Detalhados",
            description: "Fornecemos relatórios com todas as semelhanças encontradas e suas fontes."
        },
        {
            title: "Confiabilidade",
            description: "Amplamente reconhecido por sua precisão e usado por universidades renomadas"
        },
        {
            title: "Transparência",
            description: "Enviamos vídeos mostrando a verificação do seu trabalho, assegurando a originalidade do conteúdo."
        },
    ]

    return (
        <Grid item xs={12}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography mt={2} variant="h6" fontWeight="bold" textAlign="center">
                    Vantagens do CopySpider Premium
                </Typography>
                <StarRateIcon sx={{ color: "#FFDE59", width: "45px", height: "45px" }} />
            </Grid>
            <List sx={{ backgroundColor: "#00ADEF", borderRadius: 4 }}>
                {listaDeVantagens.map((vantagem, index) => (
                    <ListItem key={index} sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                        <CheckIcon sx={{ mr: 1, color: "#1AF63B" }} />
                        <ListItemText
                            primary={
                                <Grid item xs={12}>
                                    <Typography fontWeight="bold" variant="h6">
                                        {vantagem.title}
                                    </Typography>
                                    <Typography>
                                        {vantagem.description}
                                    </Typography>
                                </Grid>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}