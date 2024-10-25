import './Cart.css'
import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import Checkout from './Checkout.jsx'

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className="cart-item">
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  const [isCheckout, setIsCheckout] = useState(false) // Controlar si estamos en la vista de Checkout

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  const handleCheckout = () => {
    setIsCheckout(true) // Cambiar la vista a Checkout
  }

  const handleCancel = () => {
    setIsCheckout(false) // Volver a la vista del Carrito
  }

  if (isCheckout) {
    return (
      <div className="checkout-container">
        <Checkout />
        {/* Botón para cancelar y volver al carrito */}
        <button className="cancel-button" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    )
  }

  // Vista del Carrito
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul className="products">
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <div className="cart-summary">
          <h3>Resumen ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h3>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Envío</span>
            <span>-</span>
          </div>
          <div className="summary-item">
            <span>Imp. Ext</span>
            <span>-</span>
          </div>
          <div className="total-section">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="cart-actions">
            <button onClick={clearCart}>
              <ClearCartIcon />
            </button>
            <button onClick={handleCheckout} className="checkout-button">
              Ir al Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Cart;
