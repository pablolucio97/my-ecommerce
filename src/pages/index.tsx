import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import styles from './home.module.scss'
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'

import SearchContext, { SearchContextProvider } from '../contexts/SearchContext'
import { ProductsContext } from '../contexts/ProductsContext'

import React, { useState, useEffect, useContext } from 'react'

import Link from 'next/link'

type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  setOnCard: boolean;
  sentTocard: () => void;
}

export default function Home() {


  const {
    getProducstsByCategory,
    products,
    sentToCard
  } = useContext(ProductsContext)

  const { possibleSearchs } = useContext(SearchContextProvider)


  useEffect(() => {
    getProducstsByCategory('')
  }, [])





  return (
    <SearchContext >
      <div>
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
              products.map((product, index) => (
                <div className={styles.card} key={product.id}>
                  <Link href={`/products/${product.id}`}>
                    <img src={product.image} alt={product.description} />
                  </Link>
                  <span>{(product.title).substring(0, 24).concat('...')}</span>
                  <strong>R${(product.price).toFixed(2).toString().replace('.', ',')}</strong>
                </div>
              ))
            }
          </div>
          <div>
          </div>
        </main>
      </div>
    </SearchContext>
  )
}

