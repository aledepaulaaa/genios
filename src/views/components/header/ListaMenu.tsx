import SendIcon from "@mui/icons-material/Send"
import LogoV1 from "../../assets/LOGOTIPO.png"
import Image from "next/image"
import { LISTA_MENU } from "@/interfaces/IListaMenu"
import { Button, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import router from "next/router"

export default function ListaMenu() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="space-around" alignItems="center" width="100%">
                <Image
                    src={LogoV1}
                    alt="logo"
                    width={100}
                    height={100}
                    style={{ cursor: "pointer", width: 120, height: 65 }}
                />
                <List sx={{ display: "flex", width: "50%" }}>
                    {LISTA_MENU.map((item) => (
                        <ListItem key={item.id}>
                            {item.id === "contato" ? (
                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={() => router.push(`/#${item.id}`)}
                                    sx={{
                                        width: { xs: "100%", md: "auto" },
                                        color: "black",
                                        fontSize: "1rem",
                                        textTransform: "none",
                                        borderRadius: 2,
                                        border: "1px solid black",
                                        backgroundColor: "#00ADEF",
                                        "&:hover": {
                                            backgroundColor: "#FFDE59",
                                            color: "black",
                                        }
                                    }}
                                >
                                    {item.item}
                                </Button>
                            ) : (
                                <ListItemText
                                    primary={
                                        <Typography
                                            onClick={() => router.push(`/#${item.id}`)}
                                            variant="h6"
                                            sx={{
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                textAlign: "center",
                                                borderRadius: 2,
                                                p: 1,
                                                "&:hover": {
                                                    backgroundColor: "#00ADEF",
                                                    color: "white",
                                                    p: 1
                                                }
                                            }}
                                        >
                                            {item.item}
                                        </Typography>
                                    }
                                />
                            )}
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    )
}