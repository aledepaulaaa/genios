import React from "react"
import Layout from "@/views/components/Layout"
import { theme } from "@/views/theme/theme"
import { ThemeProvider } from "@mui/material"
import type { AppProps } from "next/app"
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"


export default function App({ Component, pageProps }: AppProps) {
    const [showButton, setShowButton] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        setShowButton(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            zIndex: 1000,
                        }}
                    >
                        <ArrowCircleUpIcon style={{ fontSize: "50px", color: "#0070f3" }} />
                    </button>
                )}
            </Layout>
        </ThemeProvider>
    )
}
