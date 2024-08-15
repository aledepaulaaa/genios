// src\interfaces\IListaMenu.ts
export interface IListaMenu {
    item: string
    id: string
    link?: string
}

export const LISTA_MENU: IListaMenu[] = [
    {
        item: "Início",
        id: "home",
    },
    {
        item: "Sobre",
        id: "sobre",
    },
    {
        item: "Depoimentos",
        id: "depoimentos",
    },
    {
        item: "Garantias",
        id: "garantias",
    },
    {
        item: "Contato",
        id: "contato",
        link: "https://wa.me/5516996293211"
    }
]