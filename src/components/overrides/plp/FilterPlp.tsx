import React, { useState } from 'react'
import { useSearch } from '@faststore/sdk'

const FilterPlp = (props: any) => {
  const facets = props.facets || []
  const searchContext = useSearch() as any
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const handleToggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const handleFacetToggle = (facetKey: string, facetValue: string) => {
    if (!searchContext.state || typeof searchContext.setState !== 'function') {
      console.error('FastStore: No se encontró el estado global.')
      return
    }

    const currentState = searchContext.state
    const currentFacets = currentState.selectedFacets || []

    const isSelected = currentFacets.some(
      (f: any) => f.key === facetKey && f.value === facetValue
    )

    const newFacets = isSelected
      ? currentFacets.filter((f: any) => !(f.key === facetKey && f.value === facetValue))
      : [...currentFacets, { key: facetKey, value: facetValue }]

    searchContext.setState({
      ...currentState,
      selectedFacets: newFacets,
      page: 0
    })
  }

  const currentFacets = searchContext?.state?.selectedFacets || []

  if (!facets.length) return null

  return (
    <div style={{ width: '280px', background: '#fff', padding: '1.5rem', borderRight: '1px solid #e5e5e5' }}>
      <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #000' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Filtros</h2>
        {currentFacets.length > 0 && (
          <button
            onClick={() => searchContext.setState({ ...searchContext.state, selectedFacets: [], page: 0 })}
            style={{ marginTop: '0.5rem', background: 'none', border: 'none', color: '#666', fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Limpiar filtros ({currentFacets.length})
          </button>
        )}
      </div>

      {facets.map((facet: any, index: number) => (
        <div key={facet.key} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e5e5e5', paddingBottom: '1rem' }}>
          <button
            onClick={() => handleToggleAccordion(index)}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '0.5rem 0', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}
          >
            <span>{facet.label}</span>
            <span style={{ transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', fontSize: '12px' }}>▼</span>
          </button>

          {openAccordion === index && (
            <div style={{ marginTop: '0.75rem' }}>
              {facet.values.map((value: any) => (
                <label key={value.value} style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0', cursor: 'pointer', fontSize: '14px' }}>
                  <input
                    type="checkbox"
                    checked={currentFacets.some((f: any) => f.key === facet.key && f.value === value.value)}
                    onChange={() => handleFacetToggle(facet.key, value.value)}
                    style={{ marginRight: '0.75rem', width: '18px', height: '18px', cursor: 'pointer', accentColor: '#000' }}
                  />
                  <span style={{ flex: 1 }}>{value.label}</span>
                  <span style={{ color: '#999', fontSize: '12px' }}>({value.quantity})</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FilterPlp