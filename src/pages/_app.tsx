import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'
import styles from './app.module.scss'

import SearchContext, {SearchContextProvider} from '../contexts/SearchContext'
import ProductsContext from '../contexts/ProductsContext'

import { useState, useEffect, useContext } from 'react'

import api from '../services/api'

type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
}

function MyApp() {

  const {possibleSearchs} = useContext(SearchContextProvider)

  const [products, setProducts] = useState<ProductProps[]>([])


  async function getProducstsByCategory(term?: string) {
    const { data } = term ?
      await api.get(`/products/category/${term}`) :
      await api.get(`/products`)
    setProducts(data)
  }


  useEffect(() => {
    getProducstsByCategory('')
  }, [])


  return (
    <ProductsContext>
      <SearchContext >
        <div>
          <Header />
          <Banner />
          <main className={styles.mainContainer}>
            <div className={styles.menu}>
              <strong>Categorias</strong>
              <ul>
                {possibleSearchs.map(possible => (
                  <button key={possible.title} onClick={() => getProducstsByCategory(`${possible.value}`)}>
                    {possible.title}
                  </button>
                ))}
              </ul>
            </div>
            <div className={styles.productsContainer}>
              {
                products.map(product => (
                  <div className={styles.card} key={product.id}>
                    <img src={product.image} alt={product.description} />
                    <span>{(product.title).substring(0, 24).concat('...')}</span>
                    <strong>R${(product.price).toFixed(2).toString().replace('.', ',')}</strong>
                    <button>Adicionar ao carrinho</button>
                  </div>
                ))
              }
            </div>

          </main>
          <Footer />
        </div>
      </SearchContext>
    </ProductsContext>
  )
}

export default MyApp