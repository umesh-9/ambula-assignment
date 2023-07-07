import React, { useContext } from "react";
import { cartContext } from "../Context";

const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className="w-[90%] sm:w-[30%] mx-auto ml-2  p-3 shadow-xl">
      <img src={product.image} className="w-[350px] h-[350px]" alt="l" />
      <h1 className="text-xl font-bold">Name:{product.title}</h1>
      <p className="text-md font-semibold">Price: ${product.price}</p>
      {cart.includes(product) ? (
        <button
          className="w-full bg-red-600 text-white p-1 rounded-sm"
          onClick={() => setCart(cart.filter((pro) => pro.id !== product.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="w-full bg-slate-600 text-white p-1 rounded-sm"
          onClick={() => setCart([...cart, product])}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
