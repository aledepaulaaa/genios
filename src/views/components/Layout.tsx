import Header from "./header/Header"
import Footer from "./footer/Footer"
import { Box } from "@mui/material"
import { ILayout } from "@/interfaces/ILayout"

export default function Layout({ children }: ILayout) {
    return (
        <Box display="flex" flexDirection="column" overflow="hidden">
            <Header />
            <Box component="main" flexGrow={1}>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}