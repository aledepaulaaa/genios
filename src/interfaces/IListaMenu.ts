// src\interfaces\IListaMenu.ts
export interface IListaMenu {
    item: string
    id: string
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
    }
]