import React from 'react'
import { usePDP } from '@faststore/core'
import styles from './CrossSelling.module.scss'

type Product = {
    name: string
    link: string
    image: string
    price: number
}

export interface CrossSellingProps {
    enabled?: boolean
    title?: string
    products?: Product[]
}

export default function CrossSelling({
    enabled = true,
    title = 'Productos relacionados',
    products = [],
}: CrossSellingProps) {
    const { data } = usePDP()

    if (!enabled) return null

    const related =
        data?.product?.isRelatedTo?.map((item: any) => ({
            name: item.name,
            link: item.url,
            image: item.image?.[0]?.url,
            price: item.offers?.offers?.[0]?.price,
        })) ?? []

    const finalProducts = related.length ? related : products

    if (!finalProducts.length) return null

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.grid}>
                {finalProducts.map((product, index) => (
                    <a
                        key={index}
                        href={product.link}
                        className={styles.card}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.image}
                        />

                        <span className={styles.name}>
                            {product.name}
                        </span>

                        <span className={styles.price}>
                            S/ {product.price}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    )
}