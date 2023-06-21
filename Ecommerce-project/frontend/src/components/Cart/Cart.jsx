import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetailsFetched, setProductDetailsFetched] = useState(false);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/shoppingcarts/');
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${productId}/`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/api/shoppingcarts/${itemId}/`);
      // Remove the item from the local cartItems state
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProductDetailsForCartItems = async () => {
      const productDetailsPromises = cartItems.map((item) =>
        fetchProductDetails(item.product)
      );
      const productDetails = await Promise.all(productDetailsPromises);
      const updatedCartItems = cartItems.map((item, index) => ({
        ...item,
        product: productDetails[index],
      }));
      setCartItems(updatedCartItems);
      setProductDetailsFetched(true);
    };

    if (cartItems.length > 0 && !productDetailsFetched) {
      fetchProductDetailsForCartItems();
    }
  }, [cartItems, productDetailsFetched]);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.product ? (
                <div>
                  <h3>{item.product.title}</h3>
                  <p>Price: ${item.product.price}</p>
                </div>
              ) : (
                <p>Product not found</p>
              )}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
