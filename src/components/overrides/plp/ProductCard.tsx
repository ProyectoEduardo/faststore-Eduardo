import React from 'react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    image: Array<{ url: string; alternateName?: string }>
    offers: {
      offers: Array<{
        price: number
        listPrice: number
      }>
    }
    slug: string
    brand?: { name: string }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const price = product.offers?.offers[0]?.price || 0
  const listPrice = product.offers?.offers[0]?.listPrice || 0
  const discount = listPrice > price ? Math.round(((listPrice - price) / listPrice) * 100) : 0
  const mainImage = product.image?.[0]?.url || ''

  return (
    <a 
      href={`/${product.slug}/p`}
      style={{
        display: 'block',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Imagen del producto */}
      <div style={{ position: 'relative', paddingTop: '100%', background: '#f5f5f5' }}>
        <img
          src={mainImage}
          alt={product.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        
        {/* Badge de descuento */}
        {discount > 0 && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#ff0000',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            -{discount}%
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div style={{ padding: '1rem' }}>
        {/* Marca */}
        {product.brand?.name && (
          <p style={{ 
            fontSize: '12px', 
            color: '#666', 
            marginBottom: '0.25rem',
            textTransform: 'uppercase'
          }}>
            {product.brand.name}
          </p>
        )}

        <h3 style={{
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '0.5rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          minHeight: '40px'
        }}>
          {product.name}
        </h3>

        <div>
          {listPrice > price && (
            <p style={{
              fontSize: '12px',
              color: '#999',
              textDecoration: 'line-through',
              marginBottom: '4px'
            }}>
              S/ {listPrice.toFixed(2)}
            </p>
          )}
          <p style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#000'
          }}>
            S/ {price.toFixed(2)}
          </p>
        </div>

        {/* ✅ Botón dentro del div padding */}
        <div
          style={{
            marginTop: '0.75rem',
            width: '100%',
            padding: '0.75rem',
            background: '#000',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#333')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#000')}
        >
          Ver producto
        </div>

      </div>
    </a>
  )
}