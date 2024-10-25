import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const sortFilterId = useId() // Id para el select de orden

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  const handleChangeSort = (event) => {
    setFilters(prevState => ({
      ...prevState,
      sort: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='100'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='Novela'>Novela</option>
          <option value='Distopía'>Distopía</option>
          <option value='Fantasía'>Fantasía</option>
          <option value='Historia'>Historia</option>
          <option value='Autoayuda'>Autoayuda</option>
          <option value='Filosofía'>Filosofía</option>
          <option value='Ciencia'>Ciencia</option>
        </select>
      </div>

      <div>
        <label htmlFor={sortFilterId}>Ordenar por</label>
        <select id={sortFilterId} onChange={handleChangeSort}>
          <option value=''>Seleccionar</option>
          <option value='alphabetical-asc'>Alfabéticamente (A-Z)</option>
          <option value='alphabetical-desc'>Alfabéticamente (Z-A)</option>
          <option value='price-asc'>Precio (menor a mayor)</option>
          <option value='price-desc'>Precio (mayor a menor)</option>
        </select>
      </div>
    </section>
  )
}

