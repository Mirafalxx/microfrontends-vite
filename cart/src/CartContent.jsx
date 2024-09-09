import React, { useState, useEffect } from "react";
import { cart, clearCart, getCart } from "./cart";
import { currency } from "hostApp/products";

const CartContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    const subscription = cart.subscribe((value) => {
      setItems(value?.cartItems || []);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!items.length) {
    return <div className="text-center text-[30px] w-full">Your Cart is empty</div>;
  }

  return (
    <div className="mt-[50px] w-[900px] mx-auto">
      <div className=" grid grid-cols-4 gap-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">{currency.format(item.quantity * item.price)}</div>
          </React.Fragment>
        ))}
        <div className="text-right" id="grand_total">
          {currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
