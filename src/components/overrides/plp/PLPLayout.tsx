import React from 'react'
import { usePLP } from '@faststore/core'
import PLPBreadcrumb from './PLPBreadcrumb'
import ProductGrid from './ProductGrid'

export default function PLPLayout({ children }: any) {
  let data: any = null
  
  try {
    const plpData = usePLP()
    data = plpData?.data
  } catch (e) {
    console.error('❌ Error en usePLP:', e)
  }

  const products = data?.search?.products?.edges?.map((edge: any) => edge.node) || []

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
      <PLPBreadcrumb />
      {/* <h1 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '1.5rem' }}>
        Productos Otoño
      </h1>
      <div style={{ flex: 1 }}>
        <ProductGrid products={products} />
      </div> */}
    </div>
  )
}