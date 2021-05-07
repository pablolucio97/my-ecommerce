import React from 'react'
import styles from './header.module.scss'
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'
import { ProductsContext } from '../../contexts/ProductsContext'
import  {SearchContextProvider}  from '../../contexts/SearchContext'
import { useContext } from 'react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Header() {


    let {
        cartVisible,
        productsOnCart,
        toggleCartVisible,
        getProducstsByCategory
    } = useContext(ProductsContext)

    const {possibleSearchs} = useContext(SearchContextProvider)

    useEffect(() => {
        getProducstsByCategory('')
      }, [])
    

    return (
        <header className={styles.header}>
            <Link href='/'>
                <h2><FiShoppingBag size={24} /> My Ecommerce</h2>
            </Link>
            <div className={styles.menu}>
            <ul>
              {possibleSearchs.map(possible => (
                <button key={possible.title} onClick={() => getProducstsByCategory(`${possible.value}`)}>
                  {possible.title}
                </button>
              ))}
            </ul>
           </div>

            <div className={styles.rigthContent}>
                <strong>Frete grátis nas compras acima de R$ 99,90</strong>
                <span>
                    <FiShoppingCart size={16} style={{ marginRight: 8 }} />
                    {productsOnCart.length > 0 ?
                        `${productsOnCart.length} items`
                        :
                        'Seu carrinho está vazio'}
                </span>
                    <Link href='/cart'>
                        <button className={styles.btnCart}>Ir para meu carrinho</button>
                    </Link>

            </div>
        </header>
    )
}
