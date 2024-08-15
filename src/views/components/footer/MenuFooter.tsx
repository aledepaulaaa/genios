import Image from "next/image"
import router from "next/router"
import logoGenios from "../../assets/img/illustration_principal.png"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { LISTA_MENU } from "@/interfaces/IListaMenu"
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material"

export default function MenuFooter() {
    const handleSendWhatsapp = () => {
        window.open("https://wa.me/5516996293211")
    }

    const handleOpenInstagram = () => {
        window.open("https://www.instagram.com/geniosacademicos_?igsh=MWhpNWp3cnZzYzkxbA%3D%3D&utm_source=qr")
    }

    return (
        <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                mt={4}
                p={2}
                gap={2}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
            >
                <Grid item xs={12} md={6} p={2}>
                    <Image
                        src={logoGenios}
                        alt="Logo Gênios Acadêmicos"
                        width={400}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                        priority
                    />
                </Grid>
                <Grid item xs={12} md={4} display="flex" alignItems="center" flexDirection="column">
                    <Typography fontWeight="bold">
                        Links Rápidos
                    </Typography>
                    <List>
                        {LISTA_MENU.map((item) => (
                            <ListItem key={item.id} sx={{ textAlign: "center"}}>
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="caption"
                                            sx={{ cursor: "pointer" }}
                                            onClick={() => router.push(`/#${item.id}`)}
                                        >
                                            {item.item}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} gap={2} md={4} display="flex" alignItems="center" flexDirection="column">
                    <Typography fontWeight="bold">
                        Contato
                    </Typography>
                    <Typography variant="caption">
                        (11) 99999-9999
                    </Typography>
                    <Typography variant="caption">
                        email@contato.com
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} display="flex" alignItems="center" flexDirection="column">
                    <Typography fontWeight="bold">
                        Redes Sociais
                    </Typography>
                    <Grid item xs={12} gap={2} display="flex">
                        <InstagramIcon
                            onClick={handleOpenInstagram}
                            sx={{
                                cursor: "pointer",
                                width: 32,
                                height: 32
                            }}
                        />
                        <WhatsAppIcon
                            onClick={handleSendWhatsapp}
                            sx={{
                                cursor: "pointer",
                                width: 32,
                                height: 32
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} mb={2} display="flex" alignItems="center" flexDirection="column">
                    <Typography fontWeight="bold" textAlign="center">
                        Política de Privacidade
                    </Typography>
                    <Typography variant="caption" sx={{ cursor: "pointer" }} onClick={() => router.push("/politica")}>
                        Termos de Uso
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}