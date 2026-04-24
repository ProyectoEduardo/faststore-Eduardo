import React, { useState } from 'react'
import { usePDP } from '@faststore/core'

export default function ProductTabs() {
  const { data } = usePDP()
  const product = data?.product

  const [activeTab, setActiveTab] = useState<'desc' | 'specs'>('desc')

  if (!product) return null

  const description = product.description

  const PADRINO_MOCK = [
    { name: "Uso", value: "gym" },
    { name: "Fit", value: "Regular" },
    { name: "Funcionalidad", value: "Estandar" },
    { name: "Estilo", value: "Esencial" },
    { name: "Water resistant", value: "si" },
  
  ]

  const padrino =
    product.isVariantOf?.properties?.length > 0
      ? product.isVariantOf.properties.map((p: any) => ({
          name: p.name,
          value: p.values?.join(', ')
        }))
      : PADRINO_MOCK

  return (
    <div style={{ marginTop: '3rem' }}>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('desc')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: activeTab === 'desc' ? '#000000' : '#eee',
            color: activeTab === 'desc' ? '#fff' : '#545454',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          DESCRIPCIÓN
        </button>

        <button
          onClick={() => setActiveTab('specs')}
          style={{
            padding: '10px 20px',
            border: 'none',
            background: activeTab === 'specs' ? '#000000' : '#eee',
            color: activeTab === 'specs' ? '#fff' : '#545454',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          FICHA TÉCNICA
        </button>
      </div>

      {/* DESCRIPCIÓN */}
      {activeTab === 'desc' && (
        <div
          style={{ color: '#666', lineHeight: '1.6' }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* TABLA ESPECIFICACIONES */}
      {activeTab === 'specs' && (
        <div>

          {/* Header */}
          <div
            style={{
              background: '#dcdcdc',
              padding: '12px',
              fontWeight: 'bold'
            }}
          >
            Especificaciones
          </div>

          {/* Rows */}
          {padrino.map((item, index) => (
            <div
              key={item.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                padding: '12px',
                background: index % 2 === 0 ? '#f5f5f5' : '#eee'
              }}
            >
              <div style={{ fontWeight: '600' }}>
                {item.name}
              </div>

              <div style={{ color: '#444' }}>
                {item.value}
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  )
}