import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, currency } from "../api";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="application_container">
      <div className="cards__elements">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />

            <div className="product_info">
              <div className="product_info_name">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </div>
              <div className="product_info_price">{currency.format(product.price)}</div>
              <div className="product_info_description">{product.description}</div>
            </div>
            {loggedIn && (
              <div className="">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                  onClick={() => addToCart(product.id)}
                  id={`addtocart_${product.id}`}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
