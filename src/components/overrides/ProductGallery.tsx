import React, { useState } from 'react'
import { usePDP } from '@faststore/core'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const { data } = usePDP()
  const product = data?.product
  
  const images = product?.image || []

  if (images.length === 0) {
    return (
      <div className="pdp-gallery" style={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <p>No hay imágenes disponibles</p>
      </div>
    )
  }

  return (
    <div className="pdp-gallery">
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Thumbnails */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {images.slice(0, 4).map((image: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              style={{
                width: '80px',
                height: '80px',
                border: selectedImage === index ? '2px solid #000' : '1px solid #ddd',
                cursor: 'pointer',
                padding: 0,
                background: 'transparent',
                overflow: 'hidden'
              }}
            >
              <img
                src={image.url}
                alt={image.alternateName || `Imagen ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>

        {/* Imagen principal */}
        <div style={{ flex: 1 }}>
          <img
            src={images[selectedImage]?.url}
            alt={images[selectedImage]?.alternateName || 'Producto'}
            style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '600px' }}
          />
        </div>
      </div>
    </div>
  )
}