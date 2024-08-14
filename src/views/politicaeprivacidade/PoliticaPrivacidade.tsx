import { textoPolitica } from "@/@core/data/textoPolitica"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"

export default function PoliticaPrivacidade() {
    return (
        <Box width="100%" padding={2}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {textoPolitica.map((item, index) => (
                        <Accordion key={index} defaultExpanded={index === 0}>
                            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                                <Typography
                                    color="black"
                                    fontWeight="bold"
                                    textAlign="center"
                                    variant="h6"
                                >
                                    {item.pliticadeprivacidade ||
                                        item.politicadecookies ||
                                        item.compromisso ||
                                        item.termosecondicoes ||
                                        item.isencaoderesponsabilidade ||
                                        item.limitacoes ||
                                        item.precisaodosmateriais ||
                                        item.links ||
                                        item.modificacoes ||
                                        item.leiaplicavel ||
                                        item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary={
                                                <>
                                                    {item.description && (
                                                        <Typography color="black" paragraph>
                                                            {item.description}
                                                        </Typography>
                                                    )}
                                                    {item.termos && (
                                                        <Typography color="black" paragraph>
                                                            <strong>Termos:</strong> {item.termos}
                                                        </Typography>
                                                    )}
                                                    {item.usodalicenca && (
                                                        <Typography color="black" paragraph>
                                                            <strong>Uso de Licença:</strong> {item.usodalicenca}
                                                        </Typography>
                                                    )}
                                                    {item.texto1 && (
                                                        <Typography color="black" paragraph>
                                                            {item.texto1}
                                                        </Typography>
                                                    )}
                                                    {item.texto2 && (
                                                        <Typography color="black" paragraph>
                                                            {item.texto2}
                                                        </Typography>
                                                    )}
                                                    {item.textoinsencao && (
                                                        <Typography color="black" paragraph>
                                                            {item.textoinsencao}
                                                        </Typography>
                                                    )}
                                                    {item.textolimitacoes && (
                                                        <Typography color="black" paragraph>
                                                            {item.textolimitacoes}
                                                        </Typography>
                                                    )}
                                                    {item.textoprecisao && (
                                                        <Typography color="black" paragraph>
                                                            {item.textoprecisao}
                                                        </Typography>
                                                    )}
                                                    {item.textolinks && (
                                                        <Typography color="black" paragraph>
                                                            {item.textolinks}
                                                        </Typography>
                                                    )}
                                                    {item.textomodificacoes && (
                                                        <Typography color="black" paragraph>
                                                            {item.textomodificacoes}
                                                        </Typography>
                                                    )}
                                                    {item.textoaplicavel && (
                                                        <Typography color="black" paragraph>
                                                            {item.textoaplicavel}
                                                        </Typography>
                                                    )}
                                                </>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </Grid>
        </Box>
    )
}
