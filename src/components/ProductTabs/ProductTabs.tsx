import React, { useState } from 'react'
import { usePDP } from '@faststore/core'
import styles from './ProductTabs.module.scss'

export interface ProductTabsProps {
  enabled?: boolean
}

export default function ProductTabs({ enabled = true }: ProductTabsProps) {
  const { data } = usePDP()
  const product = data?.product

  const [activeTab, setActiveTab] = useState<'description' | 'specs'>(
    'description'
  )

  if (!enabled || !product) return null

  const description = product.description
  const specs = product.additionalProperty ?? []

  return (
    <section className={styles.wrapper}>
      {/* TABS */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === 'description' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('description')}
        >
          Descripción
        </button>

        <button
          className={`${styles.tab} ${
            activeTab === 'specs' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('specs')}
        >
          Especificaciones
        </button>
      </div>

      {/* CONTENIDO */}
      <div className={styles.content}>
        {activeTab === 'description' && (
          <div
            className={styles.panel}
            dangerouslySetInnerHTML={{
              __html: description || '<p>Sin descripción disponible</p>',
            }}
          />
        )}

        {activeTab === 'specs' && (
          <div className={styles.panel}>
            {specs.length > 0 ? (
              <ul className={styles.specList}>
                {specs.map((item: any, index: number) => (
                  <li key={index}>
                    <span>{item.name}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Sin especificaciones</span>
            )}
          </div>
        )}
      </div>
    </section>
  )
}