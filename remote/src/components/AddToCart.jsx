import React from "react";
import { addToCart } from "cartRemoteApp/cart";

const AddToCart = ({ id }) => {
  return (
    <button onClick={() => addToCart(id)} className="add_cart_btn">
      Add To Cart
    </button>
  );
};

export default AddToCart;
