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
  const [isCheckout, setIsCheckout] = useState(false)

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  const handleCheckout = () => {
    setIsCheckout(true)
  }

  const handleCancel = () => {
    setIsCheckout(false)
  }

  if (isCheckout) {
    return (
      <div className="checkout-container">
        <Checkout />
        <button className="cancel-button" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    )
  }

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <div className="cart-items-container">
          <ul className="products">
            {cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))}
          </ul>
        </div>

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

export default Cart
