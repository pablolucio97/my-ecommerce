import React from 'react'
import styles from './header.module.scss'
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'
import { ProductsContext } from '../../contexts/ProductsContext'
import { useContext } from 'react'
import Link from 'next/link'

export default function Header() {


    let {
        cartVisible,
        productsOnCart,
        toggleCartVisible,
    } = useContext(ProductsContext)


    return (
        <header className={styles.header}>
            <Link href='/'>
                <h2><FiShoppingBag size={24} /> My Ecommerce</h2>
            </Link>

            <div className={styles.rigthContent}>
                <strong>Frete grátis nas compras acima de R$ 99,90</strong>
                <button onClick={toggleCartVisible}>
                    <FiShoppingCart size={16} style={{ marginRight: 8 }} />
                    {productsOnCart.length > 0 ?
                        `${productsOnCart.length} items`
                        :
                        'Seu carrinho está vazio'}
                </button>
                <div className={cartVisible ? styles.cartContainerShow : styles.cartContainerHide}>
                    <Link href='/cart'>
                        <button className={styles.btnCart}>Ir para meu carrinho</button>
                    </Link>
                    {productsOnCart.map(product => (
                        <ul>
                            <li>
                                <div className={styles.cartScrollContainer}>
                                    <Link href={`/products/${product.id}`}>
                                        <img
                                            src={product.image}
                                            width={24}
                                            height={24}
                                            alt={product.title}/>
                                    </Link>
                                    <p>{(product.title).substring(0, 24).concat('...')}</p>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </header>
    )
}
