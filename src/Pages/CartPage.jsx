import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context";
import SingleProduct from "../Components/SingleProduct";
const CartPage = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  if (cart.length === 0) {
    return (
      <h1 className=" flex items-center justify-center h-screen text-center text-4xl font-bold">
        " Your Cart is Empty🤷‍♂️" <br /> Please go and shop⛷️
      </h1>
    );
  }
  return (
    <>
      <Link
        to="/shopping"
        className="text-4xl text-slate-800 hover:font-extralight"
      >
        Home
      </Link>
      <h1 className="text-2xl font-bold text-center">My Cart </h1>
      <p className="text-2xl font-bold text-center">Total : ${total}</p>
      <div className=" w-[80%] mx-auto flex flex-wrap my-2 justify-center items-center">
        {cart.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default CartPage;
