import MenuFooter from "./MenuFooter"
import { Box, Grid, Typography } from "@mui/material"

export default function Footer() {
    const getYear = () => new Date().getFullYear()

    return (
        <Box width="100%">
            <MenuFooter />
            <Grid item xs={12} display="flex" justifyContent="center">
                <Typography variant="body2" textAlign="center">
                    © {getYear()} Gênios Acadêmicos - Todos os direitos reservados
                </Typography>
            </Grid>
        </Box>
    )
}