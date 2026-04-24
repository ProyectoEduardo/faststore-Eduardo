import React, { useState } from 'react'

export default function ProductTabs(props: any) {
  const [isOpen, setIsOpen] = useState(true)

  const description = props.description || "Prepárate para enfrentar el clima con estilo y rendimiento gracias a la Functional Anorak Water Resistant Jacket, diseñada para hombres que buscan protección ligera y una estética deportiva sofisticada. Su construcción resistente al agua ayuda a repeler la humedad en condiciones variables, mientras que su diseño tipo anorak ofrece una silueta moderna, funcional y fácil de llevar. Elaborada con tejido liviano y cómodo, brinda libertad de movimiento y una sensación ligera ideal para el uso diario o actividades al aire libre. Con detalles prácticos y una imagen urbana de alto impacto, esta casaca es perfecta para transiciones climáticas y rutinas dinámicas."

  return (
    <div className="pdp-tabs" style={{ marginTop: '3rem', borderTop: '1px solid #e5e5e5', paddingTop: '2rem' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0',
          background: 'transparent',
          border: 'none',
          fontSize: '18px',
          fontWeight: '600',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        Description
        <span style={{ fontSize: '20px' }}>{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <div style={{ padding: '1rem 0', fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
          {description}
        </div>
      )}
    </div>
  )
}