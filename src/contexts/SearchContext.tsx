import { createContext, ReactNode, useState } from 'react'

type ChildrenProps = {
    children: ReactNode;
}

const possibleSearchs = [

    {
        title: 'Todas as categorias',
        value: ""
    },
    {
        title: 'Feminino',
        value: "women's clothing"
    },
    {
        title: 'Masculino',
        value: "men's clothing"
    },
    {
        title: 'Joalheria',
        value: "jewelery"
    },
    {
        title: 'Eletrônicos',
        value: "electronics"
    }

]

export const SearchContextProvider = createContext({ possibleSearchs })



export default function SearchContext({ children }: ChildrenProps) {


    return (
        <SearchContextProvider.Provider value={{ possibleSearchs }}>
            {children}
        </SearchContextProvider.Provider>
    )

}