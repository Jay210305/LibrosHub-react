import React from 'react';
import './Checkout.css';

export function Checkout() {
  return (
    <div className="checkout-container">
      <div className="cart-section">
        <h2>Tu Carrito</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="product-item">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Libro"
                    className="product-img"
                  />
                  <span>Libro</span>
                </div>
              </td>
              <td>$20.00</td>
              <td>
                <input type="number" defaultValue={1} min={1} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="subtotal-section">
          <span>Subtotal:</span>
          <span>$20.00</span>
        </div>
      </div>

      <div className="summary-section">
        <h3>Resumen (1 item)</h3>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$20.00</span>
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
          <span>$20.00</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
