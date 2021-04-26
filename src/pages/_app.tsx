
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'

import SearchContext, { SearchContextProvider } from '../contexts/SearchContext'
import ProductsContext from '../contexts/ProductsContext'

import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header/Header'


function MyApp({ Component, pageProps }) {

  return (
    <ProductsContext>
      <SearchContext >
          <main>
            <Header/>
          <Component {...pageProps} />
          </main>
        <Footer />
      </SearchContext>
    </ProductsContext>
  )
}

export default MyApp