import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { useState } from 'react'

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)
          const [isExpanded, setIsExpanded] = useState(false)

          const toggleDescription = () => {
            setIsExpanded(!isExpanded)
          }

          const description = isExpanded
            ? product.description
            : `${product.description.slice(0, 50)}...`

          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <p><strong>Author:</strong> {product.author}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p>
                  <strong>Description:</strong> {description}
                  {product.description.length > 100 && (
                    <button className="toggle-button" onClick={toggleDescription}>
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </p>
                <p><strong>Rating:</strong> {product.rating}</p>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart ? removeFromCart(product) : addToCart(product)
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
