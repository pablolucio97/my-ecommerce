import React from 'react'
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'
import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <h2><FiShoppingBag size={24} /> My Ecommerce</h2>
            <div className={styles.rigthContent}>
                <strong>Frete grátis nas compras acima de R$ 99,90</strong>
                <span><FiShoppingCart size={24} /> 0 items </span>
            </div>
        </header>
    )
}
