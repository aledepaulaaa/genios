import Head from "next/head"
import { Grid } from "@mui/material"
import HomeView from "@/views/home/HomeView"
import Sobre from "@/views/home/Sobre"
import Depoimentos from "@/views/home/Depoimentos"
import Garantias from "@/views/home/Garantias"
import AntiPlagio from "@/views/home/AntiPlagio"

export default function Home() {
    return (
        <Grid
            item
            xs={12}
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
        >
            <Head>
                <title>Gênios Acadêmicos - Nós temos a Solução!</title>
                <meta name="description" content="Descrição para editar" />
                <meta name="keywords" content="palavras-chave, para, editar" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid item xs={12} width="100%">
                <HomeView />
                <Garantias />
                <Depoimentos />
                <AntiPlagio />
                <Sobre />
            </Grid>
        </Grid>
    )
}
