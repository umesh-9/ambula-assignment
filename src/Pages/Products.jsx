import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import { Link } from "react-router-dom";
import { cartContext } from "../Context";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart } = useContext(cartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      <header className="h-[50px] p-4 bg-gray-200 flex justify-between items-center">
        <Link to="/">
          <img src="./images/logo.png" className="w-[100px] " alt="" />
        </Link>
        <Link to="cart">
          <h1 className="mr-7 text-2xl font-bold">Cart({cart.length})</h1>
        </Link>
      </header>
      <div className="mt-2 ">
        <h1 className=" text-center text-3xl text-pink-600 ">
          Welecome to Ambula Shopping
        </h1>
        <div className=" w-[80%] mx-auto flex flex-wrap my-2 justify-center items-center">
          {products.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
