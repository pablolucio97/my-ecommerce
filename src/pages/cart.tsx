import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import InputMask from 'react-input-mask'
import { ProductsContext } from '../contexts/ProductsContext'
import Link from 'next/link'
import styles from './cart.module.scss'

export default function Cart() {

    const {
        productsOnCart,
        changeQuotas,
        total,
        quotaVal,
        quota,
        availableQuotas,
        calcTotalOnCard
    } = useContext(ProductsContext)

    const [payWithCard, setPayWithCard] = useState(true)

    console.log(total)

    useEffect(calcTotalOnCard, [quota])

    return (
        <div className={styles.container}>
            {
                total === 0 ?

                <div className={styles.emptyCart}>
                <h3>Seu carrinho está vazio.</h3>
                <Link href='/'>
                    <button>Visitar alguns produtos</button>
                </Link>
                </div>
            :

            
            <div className={styles.cartContainer}>
            <h1>Meu carrinho de compras</h1>
            {productsOnCart.map(product => (
                <div className={styles.listCart}>
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <span>{(product.title).substring(0, 24).concat('...')}</span>
                        <strong>R${(product.price).toFixed(2).toString().replace('.', ',')}</strong>
                    </div>
                </div>
            ))}
            <strong>Selecione um método de pagamento:</strong>
            <div className={styles.paymentContainer}>
                <div>
                    <input
                        type="radio"
                        id="credit-card"
                        name="payment"
                        value="male"
                        onChange={() => setPayWithCard(!payWithCard)}
                        checked={payWithCard ? true : false}
                    />
                    <label>Cartão de crédito</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="boleto"
                        name="payment"
                        value="male"
                        onChange={() => setPayWithCard(!payWithCard)}
                    />
                    <label>Boleto</label>
                </div>
                <div className={styles.paymentType}>
                    {payWithCard ?
                        <form>
                            <InputMask mask='9999-9999-9999-9999' type="text" placeholder='Número do cartão' />
                            <input type='text' placeholder='Nome impresso no cartão' />
                            <InputMask mask='99/2099' type="text" placeholder='Validade' />
                            <InputMask mask='999' type="text" placeholder='Código de segurança' />
                            <select name="set-quota" id="set-quota" onChange={changeQuotas}>
                                {availableQuotas.map((quotaVal, idx) => (
                                    <option key={idx} value={quotaVal}>{quotaVal}</option>
                                ))}
                            </select>
                            <h3>Total: R${((total).toFixed(2)).toString().replace('.', ',')} </h3>
                            <strong>
                                {`Você irá pagar ${quota} x de R$${(quotaVal).toFixed(2).toString().replace('.', ',')}.`}
                            </strong>
                        </form>
                        :
                        <div className={styles.paymentBolet}>
                            <strong>Você escolheu pagar com boleto,
                            clique em finalizar pedido para gerar seu boleto.
                        </strong>
                            <h3>Total: R${((total).toFixed(2)).toString().replace('.', ',')} </h3>
                        </div>

                    }
                </div>
            </div>
            <Link href='/login'>
                <button>Finalizar pedido</button>
            </Link>
        </div>
            }
        </div>
    )
}
