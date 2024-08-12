import React from "react"
import ListaMenu from "./ListaMenu"
import ListaMenuMobile from "./ListaMenuMobile"
import { Box, useMediaQuery } from "@mui/material"

export default function Header() {
    const isMobile = useMediaQuery("(max-width: 1024px)")

    return (
        <Box width="100%">
            {isMobile ? (
                <ListaMenuMobile />
            ) : (
                <ListaMenu />
            )}
        </Box>
    )
}