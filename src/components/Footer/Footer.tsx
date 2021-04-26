import React from 'react'

import {
    FiTruck,
    FiClock,
    FiCreditCard,
    FiGlobe,
    FiFacebook,
    FiTwitter,
    FiInstagram,
    FiYoutube
  } from 'react-icons/fi'

import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <strong> <FiTruck size={32} color='#ffb108'/> Frete grátis</strong>
                <span>Frete grátis para todo o Brasil nas compras acima de R$99,90</span>
            </div>
            <div>
                <strong> <FiClock size={32} color='#ffb108'/> Entrega express</strong>
                <span>A partir de 2 dias úteis</span>
            </div>
            <div>
                <strong> <FiCreditCard size={32} color='#ffb108'/> Parcele no cartão</strong>
                <span>Toda loja em até 12x sem juros no cartão Visa e MasterCard</span>
            </div>
            <div>
                <strong> <FiGlobe size={32} color='#ffb108'/> Acompnhe nossas redes</strong>
                <ul>
                    <li><FiInstagram size={18} color='#ffb108'/>  Instagram</li>
                    <li><FiFacebook size={18} color='#ffb108'/>  Facebook</li>
                    <li><FiYoutube size={18} color='#ffb108'/>  Youtube</li>
                    <li><FiTwitter size={18} color='#ffb108'/>  Twitter</li>
                </ul>
            </div>
        </footer>
    )
}
