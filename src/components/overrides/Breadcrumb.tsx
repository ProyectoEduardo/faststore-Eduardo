import React from 'react'
import { usePDP } from '@faststore/core'

export default function Breadcrumb() {
  const { data } = usePDP()
  const product = data?.product
  
  // Construir breadcrumb desde los datos del producto
  const breadcrumbItems: Array<{ name: string; href: string }> = [
    { name: 'Home', href: '/' }
  ]

  // Si hay breadcrumbList en el producto, usarlo
  if (product?.breadcrumbList?.itemListElement) {
    product.breadcrumbList.itemListElement.forEach((item: any) => {
      breadcrumbItems.push({
        name: item.name,
        href: item.item
      })
    })
  }

  // Si no hay breadcrumb data, usar fallback
  // if (breadcrumbItems.length === 1) {
  //   breadcrumbItems.push(
  //     { name: "Men's", href: '/mens' },
  //     { name: 'Jacket & Zipper', href: '/mens/jacket-zipper' }
  //   )
  // }

  return (
    <nav className="pdp-breadcrumb" aria-label="Breadcrumb" style={{ padding: '1rem 0' }}>
      <ol style={{ 
        display: 'flex', 
        listStyle: 'none', 
        padding: 0,
        margin: 0,
        gap: '0.5rem',
        fontSize: '14px'
      }}>
        {breadcrumbItems.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {index < breadcrumbItems.length - 1 ? (
              <>
                <a href={item.href} style={{ textDecoration: 'none', color: '#666' }}>
                  {item.name}
                </a>
                <span style={{ color: '#999' }}>›</span>
              </>
            ) : (
              <span style={{ color: '#000', fontWeight: '500' }}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}