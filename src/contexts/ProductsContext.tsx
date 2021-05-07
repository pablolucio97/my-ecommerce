
import React from 'react'
import { ChangeEvent, createContext, useState } from 'react'
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
  calcTotalOnCard: () => void;
  changeQuotas: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  productsOnCart: ProductProps[]
  cartVisible: boolean;
  availableQuotas: number[];
  total: number;
  quota: number;
  quotaVal: number;
}

export const ProductsContext = createContext({} as ProductsContextData)

export default function ProductsStateProvider({ children }: PlayerProviderProps) {

  const [products, setProducts] = useState<ProductProps[]>([])
  const [productsOnCart, setProductsOnCard] = useState<ProductProps[]>([])
  const [cartVisible, setCartVisible] = useState(false)
  const [singleProduct, setSingleProduct] = useState<ProductProps>({} as ProductProps)
  const [total, setTotal] = useState(0)
  const [quota, setQuota] = useState(1)
  const [quotaVal, setQuotaVal] = useState(0)

  const availableQuotas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  function calcTotalOnCard() {
    const total = productsOnCart.reduce((acc, el) => acc + el.price, 0)
    const quotaVal = Number(total / quota)
    setTotal(total)
    setQuotaVal(quotaVal)
  }

  function changeQuotas(e: ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value
    setQuota(Number(val))
  }

  async function getProducstsByCategory(term?: string) {
    const { data } = term ?
      await api.get(`/products/category/${term}`) :
      await api.get(`/products`)
    setProducts(data)
  }

  function renderProductDetails(product: ProductProps) {
    setProducts([product])
  }

  function toggleCartVisible() {
    setCartVisible(!cartVisible)
  }

  function sentToCard() {
    const addProduct = products[0]
    if (productsOnCart.includes(products[0])) {
      return
    }
    setProductsOnCard([...productsOnCart, addProduct])
  }

  return (
    <ProductsContext.Provider value={{
      products,
      cartVisible,
      sentToCard,
      toggleCartVisible,
      productsOnCart,
      renderProductDetails,
      singleProduct,
      calcTotalOnCard,
      changeQuotas,
      quota,
      quotaVal,
      availableQuotas,
      total,
      getProducstsByCategory,
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

