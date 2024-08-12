// theme.ts
import { Poppins } from "next/font/google"
import { createTheme } from "@mui/material"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

export const theme = createTheme({
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif",
        ].join(","),
        h1: {
            fontFamily: poppins.style.fontFamily
        },
        h2: {
            fontFamily: poppins.style.fontFamily
        },
        h3: {
            fontFamily: poppins.style.fontFamily
        },
        h4: {
            fontFamily: poppins.style.fontFamily
        },
        h5: {
            fontFamily: poppins.style.fontFamily
        },
        h6: {
            fontFamily: poppins.style.fontFamily
        },
        body1: {
            fontFamily: poppins.style.fontFamily
        },
        body2: {
            fontFamily: poppins.style.fontFamily
        },
        subtitle1: {
            fontFamily: poppins.style.fontFamily
        },
        subtitle2: {
            fontFamily: poppins.style.fontFamily
        },
        caption: {
            fontFamily: poppins.style.fontFamily
        },
        overline: {
            fontFamily: poppins.style.fontFamily
        },
    },
})