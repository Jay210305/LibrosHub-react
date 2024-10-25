import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products, searchTerm = '') => {
    // Filtrar productos por precio y categoría
    let filteredProducts = products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      );
    });

    // Aplicar la búsqueda por título o autor
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar productos según los criterios de filtro
    switch (filters.sort) {
      case 'alphabetical-asc':
        filteredProducts = filteredProducts.sort((a, b) => 
          a.title.localeCompare(b.title)
        );
        break;
      case 'alphabetical-desc':
        filteredProducts = filteredProducts.sort((a, b) => 
          b.title.localeCompare(a.title)
        );
        break;
      case 'price-asc':
        filteredProducts = filteredProducts.sort((a, b) => 
          a.price - b.price
        );
        break;
      case 'price-desc':
        filteredProducts = filteredProducts.sort((a, b) => 
          b.price - a.price
        );
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  return { filters, filterProducts, setFilters };
}
