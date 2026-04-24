import React from 'react'

interface PLPBreadcrumbProps {
  breadcrumbs?: Array<{
    name: string
    href: string
  }>
}

export default function PLPBreadcrumb({ breadcrumbs }: PLPBreadcrumbProps) {
  const defaultBreadcrumbs = breadcrumbs || [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/search' }
  ]

  return (
    <nav aria-label="Breadcrumb" style={{ padding: '1rem 0' }}>
      <ol style={{
        display: 'flex',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        gap: '0.5rem',
        fontSize: '14px'
      }}>
        {defaultBreadcrumbs.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {index < defaultBreadcrumbs.length - 1 ? (
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