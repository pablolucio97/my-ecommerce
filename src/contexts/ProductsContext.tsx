
import {createContext, useState} from 'react'
import api from '../services/api'


type PlayerProviderProps = {
    children: React.ReactNode
}

type ProductProps = {
    id: number;
    title: string;
    image: string;
    price: number;
    description?: string;
}

type ProductsContextData = {
    products: ProductProps[]
    singleProduct: ProductProps;
    getProducstsByCategory: (term: string) => void;
    renderProductDetails: (product: ProductProps) => void;
    toggleCartVisible: () => void;
    sentToCard?: () => void;
    productsOnCart: ProductProps[]
    cartVisible: boolean;

}
export const ProductsContext = createContext({} as ProductsContextData)

export default function ProductsStateProvider({children} : PlayerProviderProps){

  const [products, setProducts] = useState<ProductProps[]>([])
  const [productsOnCart, setProductsOnCard] = useState<ProductProps[]>([])
  const [cartVisible, setCartVisible] = useState(false)
  const [singleProduct, setSingleProduct] = useState<ProductProps>({} as ProductProps)


  async function getProducstsByCategory(term?: string) {
    const { data } = term ?
      await api.get(`/products/category/${term}`) :
      await api.get(`/products`)
    setProducts(data)
  }

function renderProductDetails(product: ProductProps){
    setProducts([product])
  }


  function toggleCartVisible() {
    setCartVisible(!cartVisible)
  }

  function sentToCard(){
    const addProduct = products[0]
    if(productsOnCart.includes(products[0])){
      return
    }
    setProductsOnCard([...productsOnCart, addProduct])
  }

    return(
        <ProductsContext.Provider value={{
            products,
            cartVisible,
            sentToCard,
            toggleCartVisible,
            productsOnCart,
            renderProductDetails,
            singleProduct,
            getProducstsByCategory,}}>
            {children}
        </ProductsContext.Provider>
    )
}

