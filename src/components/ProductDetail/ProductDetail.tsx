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
  console.log("xdddddddddd",data)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!enabled || !product) return null

  const images = product.image ?? []
  const name = product.name
  const price = product.offers?.offers?.[0]?.price

  return (
    <section className={styles.wrapper}>
      {/* GALERÍA */}
      <div className={styles.gallery}>
        <div className={styles.thumbs}>
          {images.map((img: any, i: number) => (
            <img
              key={i}
              src={img.url}
              onClick={() => setSelectedImage(i)}
              className={selectedImage === i ? styles.active : ''}
            />
          ))}
        </div>

        <div className={styles.mainImage}>
          <img src={images[selectedImage]?.url} alt={name} />
        </div>
      </div>

      {/* INFO */}
      <div className={styles.info}>
        <h1>{name}</h1>

        <div className={styles.price}>S/ {price}</div>

        {/* VARIANTES (mock simple) */}
        <div className={styles.variants}>
          <span>Seleccione el tamaño</span>
          <div className={styles.sizes}>
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button key={size}>{size}</button>
            ))}
          </div>
        </div>

        {/* CANTIDAD */}
        <div className={styles.quantity}>
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        {/* BOTÓN */}
        <button className={styles.buy}>{buttonText}</button>
      </div>
    </section>
  )
}