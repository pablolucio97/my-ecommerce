import React from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import api from '../../services/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import styles from './productDetails.module.scss'

type ProductProps = {
    id: number;
    title: string;
    image: string;
    price: number;
    description?: string;
}

type Products = {
    singleProduct: ProductProps
}

export default function Product({singleProduct} : Products ) {

    const router = useRouter()

    const { renderProductDetails, sentToCard } = useContext(ProductsContext)


    useEffect(() => {
        renderProductDetails(singleProduct)
    }, [])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.productDetails}>
                <h3>{singleProduct.title}</h3>
                <img src={singleProduct.image} alt={singleProduct.title}/>
                <span>{singleProduct.description}</span>
                <strong>R${(singleProduct.price).toFixed(2).toString().replace('.', ',')}</strong>
                <button onClick={() => sentToCard()}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps : GetStaticProps = async (ctx) => {

    const {slug} = ctx.params

    const {data} = await api.get(`products/${slug}`)

    const singleProduct = {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        description: data.description
    }
    return{
        props : {
            singleProduct
        },
        revalidate: 60 * 60 * 24
    }

}
