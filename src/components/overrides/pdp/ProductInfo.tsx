import React, { useState } from 'react'
import { usePDP } from '@faststore/core'
import { BuyButton } from '@faststore/ui'

export default function ProductInfo() {


  
  const [quantity, setQuantity] = useState(1)
  const { data } = usePDP()
  const product = data?.product
  
  if (!product) {
    return <div>Cargando información del producto...</div>
  }

  return (
    
    <div className="pdp-info" style={{ padding: '1rem 0' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '0.5rem' }}>
        {product.isVariantOf?.name}
      </h1>
      
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '1rem' }}>
        Ref.: {product.sku}
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '28px', fontWeight: '700' }}>
            S/ {product.offers?.offers[0]?.price || 0}
          </span>
          <span style={{ 
            fontSize: '12px', 
            padding: '0.25rem 0.5rem', 
            background: '#000', 
            color: '#fff',
            fontWeight: '600'
          }}>
            LANZAMIENTO
          </span>
        </div>
      </div>

      {/* Selector de cantidad */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          width: 'fit-content',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            style={{
              width: '40px',
              height: '40px',
              border: 'none',
              background: 'transparent',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            −
          </button>
          <span style={{ minWidth: '40px', textAlign: 'center', fontSize: '16px' }}>
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            style={{
              width: '40px',
              height: '40px',
              border: 'none',
              background: 'transparent',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Botón de comprar */}

    


      <button
        style={{
          width: '100%',
          padding: '1rem',
          background: '#0066ff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        🛒 Comprar
      </button>
    </div>
  )
}

