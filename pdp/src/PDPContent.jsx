import React, { useState, useEffect, useRef } from "react";
import AddToCart from "remoteApp/AddToCart";
import { useLoggedIn } from "cartRemoteApp/cart";
import { getProductById, currency } from "hostApp/products";

import { useParams } from "react-router-dom";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const loggedIn = useLoggedIn();

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  const addToCart = useRef(null);

  if (!product) return null;

  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={product.image} alt={product.name} className="w-[400px] " />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">{currency.format(product.price)}</div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
        {loggedIn && <AddToCart id={id} />}
      </div>
    </div>
  );
}
