import {createContext, useState} from 'react'


type PlayerProviderProps = {
    children: React.ReactNode
}

type ProductsProps = {
    id: number;
    title: string;
    image: string;
    price: number;
    description?: string;
}

type ProductsListProps = {
    products: ProductsListProps[]
}
export const ProductsContext = createContext({} as ProductsListProps)

export default function ProductsStateProvider({children} : PlayerProviderProps){

    const [products, setProducts] = useState([])

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

