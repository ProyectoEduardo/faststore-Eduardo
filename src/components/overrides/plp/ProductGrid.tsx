import React from 'react'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Array<any>
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div style={{ 
        padding: '4rem 2rem', 
        textAlign: 'center',
        color: '#666'
      }}>
        <p style={{ fontSize: '18px', marginBottom: '1rem' }}>
          No se encontraron productos
        </p>
        <p style={{ fontSize: '14px' }}>
          Intenta ajustar los filtros o realiza otra búsqueda
        </p>
      </div>
    )
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem',
      padding: '1rem'
    }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}