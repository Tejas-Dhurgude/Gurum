import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './Shop.css';
import Navbar from '../Navbar/Navbar';
import img1 from "../../assets/product.jpg"
import Footer from '../Footer/Footer';
export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load the CSV data
    Papa.parse('/data.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setProducts(results.data);
      },
    });
  }, []);
  console.log("See ",products)
  const handleAddToCart = (productName) => {
    console.log(`${productName} has been added to the cart.`);
    // Implement your cart logic here
  };

  return (
    <>
    <Navbar/>
    <div className="shop">

      
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={img1} alt="" className='img' />
            <h2>{product['Product Name']}</h2>
            <p>Cost: ${product['Cost']} <button>Get a quote</button></p>
            <p>Department: {product['Department']}</p>
            <button onClick={() => handleAddToCart(product['Product Name'])}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
