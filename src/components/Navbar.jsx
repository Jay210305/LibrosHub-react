import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ setSearchTerm }) {
    const [inputValue, setInputValue] = useState('');

    const handleSearchChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(inputValue); // Enviar búsqueda a App sin modificar posiciones
    };

    return (
        <nav className="navbar">
            <div>
                <div className="logo">Libro</div>
                <div className="logo">HuB</div>
            </div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Buscar por autor o título..."
                    value={inputValue}
                    onChange={handleSearchChange}
                />
                <button type="submit">Buscar</button>
            </form>
            <div></div>
        </nav>
    );
}

export default Navbar;
