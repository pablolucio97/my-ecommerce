import React from 'react'
import styles from './banner.module.scss'


export default function Banner() {

const banner1 = '/banner1.jpg'
const banner2 = '/banner3.gif'

const banners = [banner1, banner2]

const currentBanner = Math.floor(Math.random() * banners.length)

    return (
        <div className={styles.banner}>
            <img src={ currentBanner === 1 ? '/banner1.jpg' : 'banner3.gif'}/>
        </div>
    )
}
