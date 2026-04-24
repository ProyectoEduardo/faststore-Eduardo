import React, { useState } from 'react'

export default function ShippingCalculator() {
  const [postalCode, setPostalCode] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="pdp-shipping" style={{ padding: '1.5rem 0', borderTop: '1px solid #e5e5e5', marginTop: '1rem' }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '1rem' }}>
        Shipping
      </h3>
      
      <div style={{ marginBottom: '0.5rem' }}>
        <input
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value)
            if (error) setError('')
          }}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: error ? '1px solid #dc3545' : '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        {error && (
          <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '0.25rem' }}>
            {error}
          </p>
        )}
      </div>
      
      <a 
        href="#" 
        style={{ 
          fontSize: '14px', 
          color: '#0066ff',
          textDecoration: 'none'
        }}
      >
        I don't know my Postal Code
      </a>
    </div>
  )
}