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
                <title>Gênios Acadêmicos | Serviços acadêmicos especializados</title>
                <meta name="description" content="Serviços acadêmicos especializados em TCC, monografias, artigos científicos, projetos de pesquisa, e muito mais." />
                <meta name="keywords" content="TCC, trabalhos acadêmicos, monografias, artigos científicos, projetos de pesquisa, estágios acadêmicos, consultoria acadêmica, revisão de textos, formatação ABNT, orientação acadêmica, redação de trabalhos, dissertações, teses, metodologia científica, planejamento de pesquisa, suporte acadêmico, escrita acadêmica, revisão bibliográfica, normalização de trabalhos, produção acadêmica" />
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
