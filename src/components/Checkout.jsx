import React from 'react';
import './Checkout.css';
import { useCart } from '../hooks/useCart.js';

export function Checkout({ setIsCheckout }) {
  const { cart } = useCart();

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleCancel = () => {
    setIsCheckout(false); 
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="summary-section">
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
          <button className="checkout-button">Checkout</button>
        </div>

        <div className="cart-items-section">
          <h2>Productos seleccionados</h2>
          <ul className="products-list">
            {cart.map(product => (
              <li key={product.id} className="product-item">
                <img src={product.thumbnail} alt={product.title} className="product-img" />
                <div className="product-info">
                  <strong>{product.title}</strong> - ${product.price}
                  <div>
                    <small>Cantidad: {product.quantity}</small>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="cancel-button" onClick={handleCancel}>Cancelar</button>
    </div>
  );
}

export default Checkout;
