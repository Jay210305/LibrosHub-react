import React, { useState, useEffect } from 'react';
import { products as initialProducts } from './mocks/products.json';
import { Products } from './components/Products.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { IS_DEVELOPMENT } from './config.js';
import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
    const { filterProducts } = useFilters();
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = filterProducts(initialProducts, searchTerm); // Filtrado directo con los filtros y búsqueda

    return (
        <CartProvider>
            
            <Navbar setSearchTerm={setSearchTerm} /> {/* No cambia de posición */}
            <Header />
            <Cart />
            <Products products={filteredProducts} />
            {IS_DEVELOPMENT && <Footer />}
        </CartProvider>
    );
}

export default App;
