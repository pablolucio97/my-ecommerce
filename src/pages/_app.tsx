
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'

import SearchContext from '../contexts/SearchContext'
import ProductsContext from '../contexts/ProductsContext'
import LoginContext from '../contexts/LoginContext'


import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header/Header'


function MyApp({ Component, pageProps }) {

  return (
    <ProductsContext>
      <SearchContext >
        <LoginContext>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Footer />
        </LoginContext>
      </SearchContext>
    </ProductsContext>
  )
}

export default MyApp