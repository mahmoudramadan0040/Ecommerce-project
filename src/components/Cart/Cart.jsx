import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css'
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cart/');
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/${itemId}/`);
      // Remove the item from the local cartItems state
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <h3>{item.product.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.product.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
