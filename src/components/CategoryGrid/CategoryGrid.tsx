import React from 'react'
import styles from './CategoryGrid.module.scss'

type Item = {
  title: string
  image: string
  link: string
}

export interface CategoryGridProps {
  items: Item[]
  columns?: number
}

export default function CategoryGrid({
  items = [],
  columns = 4,
}: CategoryGridProps) {
  if (!items.length) return null

  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {items.map((item, index) => (
        <a key={index} href={item.link} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} />
          </div>

          <span className={styles.title}>{item.title}</span>
        </a>
      ))}
    </div>
  )
}