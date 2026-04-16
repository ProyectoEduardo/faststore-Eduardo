import React, { useState } from 'react'
import { usePDP } from '@faststore/core'
import styles from './ProductDetail.module.scss'

export interface ProductDetailProps {
    enabled?: boolean
    buttonText?: string
}

export default function ProductDetail({
    enabled = true,
    buttonText = 'Comprar',
}: ProductDetailProps) {
    const { data } = usePDP()
    const product = data?.product

    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    if (!enabled || !product) return null

    const images = product.galleryImages ?? []
    const name = product.name

    const offer = product.offers?.offers?.[0]
    const price = offer?.price
    const listPrice = offer?.listPrice

    const increaseQty = () => setQuantity((q) => q + 1)
    const decreaseQty = () =>
        setQuantity((q) => (q > 1 ? q - 1 : 1))

    return (
        <section className={styles.wrapper}>
            <div className={styles.gallery}>
                <img
                    src={images[selectedImage]?.url}
                    alt={images[selectedImage]?.alternateName || name}
                    className={styles.mainImage}
                />

                <div className={styles.thumbs}>
                    {images.map((img: any, index: number) => (
                        <img
                            key={index}
                            src={img.url}
                            alt={img.alternateName}
                            className={`${styles.thumb} ${selectedImage === index ? styles.active : ''
                                }`}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>

                <div className={styles.priceBlock}>
                    {listPrice && (
                        <span className={styles.listPrice}>
                            S/ {listPrice}
                        </span>
                    )}
                    <span className={styles.price}>S/ {price}</span>
                </div>

                <div className={styles.quantity}>
                    <button onClick={decreaseQty}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQty}>+</button>
                </div>

                <button className={styles.buyButton}>
                    {buttonText}
                </button>
            </div>
        </section>
    )
}