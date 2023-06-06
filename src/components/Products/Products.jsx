import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCartPlus, FaEye, FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Products.css';

const Products = ({ selectedCategoryId, categoryId }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0); // New state for cart count

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search');

  useEffect(() => {
    fetchProducts(selectedCategoryId || categoryId, searchQuery);
  }, [selectedCategoryId, categoryId, searchQuery]);

  const fetchProducts = async (categoryId, query) => {
    try {
      let url = 'http://localhost:8000/api/products/';
      if (categoryId) {
        url = `http://localhost:8000/api/categories/${categoryId}/products/`;
      }
      if (query) {
        url += `${categoryId ? '&' : '?'}q=${query}`;
      }
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseQuickView = () => {
    setSelectedProduct(null);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = async () => {
    const username = localStorage.getItem('username');
  
    if (selectedProduct && selectedProduct.id) {
      try {
        // Prepare the data to send in the API request
        const data = {
          user: username,
          product_id: selectedProduct.id,
          quantity: quantity,
          
        };
  
        // Make an API call to add the product to the cart
        const response = await axios.post('http://127.0.0.1:8000/api/cart/add/', data);
        
        // Check the response status and update the cartCount if successful
        if (response.status === 200) {
          setCartCount(prevCount => prevCount + quantity);
          console.log(`Adding ${quantity} quantity of product to cart`);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Selected product is null');
    }
  };
  

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img className="product-image" src={product.image_url} alt={product.title} />
              <div className="overlay">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <FaCartPlus className="icon" />
                Add to Cart
              </button>
                <button className="quick-view-btn" onClick={() => handleQuickView(product)}>
                  <FaEye className="icon" />
                  Quick View
                </button>
                <button className="wishlist-btn">
                  <FaHeart className="icon" />
                  Add to Wishlist
                </button>
              </div>
            </div>
            <div className="product-details">
              <div>
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <p className="details">{product.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="quick-view-modal">
          <div className="quick-view-content">
            <button className="close-btn" onClick={handleCloseQuickView}>
              Close
            </button>
            <div className="quick-view-details">
              <div className="quick-view-image-container">
                <img
                  className="quick-view-image"
                  src={selectedProduct.image_url}
                  alt={selectedProduct.title}
                />
              </div>
              <div className="quick-view-info">
                <h3>{selectedProduct.title}</h3>
                <h3>{selectedProduct.id}</h3>
                <p className="price">${selectedProduct.price}</p>
                
                <p className="details">{selectedProduct.description}</p>
                <div className="quick-view-actions">
                  <div className="quantity-container">
                    <button className="quantity-btn" onClick={handleQuantityDecrease}>
                      <FaMinus className="quantity-icon" />
                    </button>
                    <input className="quantity-input" type="text" value={quantity} readOnly />
                    <button className="quantity-btn" onClick={handleQuantityIncrease}>
                      <FaPlus className="quantity-icon" />
                    </button>
                  </div>
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    <FaCartPlus className="icon" />
                    Add to Cart
                  </button>
                  <button className="add-to-cart-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
