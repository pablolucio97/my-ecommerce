import React, { useState, useContext, useEffect, useMemo } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import styles from './finish.module.scss'
import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

export default function Finish() {

    const [freeShip, setFreeShip] = useState(false)
    const [shipValue, setShipValue] = useState(0)

    const {productsOnCart, total} = useContext(ProductsContext)


    const costWithShip = (shipValue + total).toFixed(2)


    const generateOrderNumber = useMemo(() => {
        const orderNumber = Math.floor(Math.random () *  123154)
        return orderNumber
    }, [])

    const generateDeliveryDate = useMemo( () => {
        const deliveryDate = format(new Date(), ' d MMMM, EEEEEEE.', {
            locale: ptBr
        })
        return deliveryDate
    },[])

     useEffect(() => {
        if(total < 100){
            setShipValue(total * .1)
        }
    }, [])


        

    return (
        <div className={styles.container}>
            <h3>Pedido realizado com sucesso!</h3>
            <h2>Número do pedido: {generateOrderNumber}</h2>
            <div className={styles.detailsContainer}>
                <h3>Detalhes do pedido:</h3>
                <strong>Pedido: {generateOrderNumber}</strong>
                <span>Produtos:</span>
          
                    {productsOnCart.map( product => (
                        <div className={styles.listProductsContainer}>
                            <img src={product.image} alt={product.title} />
                            <span>{(product.title).substring(0, 24).concat('...')}</span>
                            <strong>R${(product.price).toFixed(2).toString().replace('.', ',')}</strong>
                        </div>
                    ))}
            
                <span>Valor do frete: R${freeShip? '0,00' : shipValue.toFixed(2)} </span>
                <strong>Valor total: R${freeShip? total.toFixed(2) : costWithShip }</strong>
                <p>Chegará até: {generateDeliveryDate}</p>
            </div>          
        </div>
    )
}
