import React from "react"
import Image from "next/image"
import router from "next/router"
import LogoV1 from "../../assets/LOGOTIPO.png"
import SendIcon from "@mui/icons-material/Send"
import { LISTA_MENU } from "@/interfaces/IListaMenu"
import CloseMenuIcon from "../icons/CloseMenuIcon"
import OpenMenuIcon from "../icons/OpenMenuIcon"
import { Button, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"

export default function ListaMenuMobile() {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return
        }
        setOpen(open)
    }

    return (
        <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mt={2}
        >
            <Image
                src={LogoV1}
                alt="logo"
                width={100}
                height={100}
                style={{
                    cursor: "pointer",
                    width: 100,
                    height: 65,
                    marginLeft: 20
                }}
            />
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, transition: "transform 0.5s ease", transformStyle: "preserve-3d", transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
                onClick={toggleDrawer(true)}
            >
                {open ?
                    <CloseMenuIcon />
                    :
                    <OpenMenuIcon />
                }
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List sx={{ display: "flex", flexDirection: "column", width: 250 }}>
                    {LISTA_MENU.map((item) => (
                        <ListItem sx={{ justifyContent: "center" }} key={item.id} disablePadding>
                            {item.id === "contato" ? (
                                <Button
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={() => router.push(`/#${item.id}`)}
                                    sx={{
                                        width: { xs: "80%", md: "auto" },
                                        backgroundColor: "transparent",
                                        color: "black",
                                        fontSize: "1.5rem",
                                        textTransform: "none",
                                        borderRadius: 2,
                                        border: "1px solid black",
                                        "&:hover": { backgroundColor: "#00ADEF", color: "white" }
                                    }}
                                >
                                    {item.item}
                                </Button>
                            ) : (
                                <ListItemButton>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="h6"
                                                onClick={() => router.push(`/#${item.id}`)}
                                                sx={{
                                                    p: 2,
                                                    fontSize: "1.5rem",
                                                    textAlign: "center",
                                                    borderRadius: 4,
                                                }}
                                            >
                                                {item.item}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            )}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Grid>
    )
}