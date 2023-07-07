import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="">
      <div className=" flex  justify-center items-center mt-5">
        <Link
          className="bg-pink-500 border rounded-md text-white font-bold hover:bg-white hover:text-pink-600 mr-3 p-2 "
          to="todolist"
        >
          TODO-List
        </Link>
        <Link
          className="bg-pink-500 border rounded-md text-white font-bold hover:bg-white hover:text-pink-600 mr-3 p-2 "
          to="shopping"
        >
          Shopping..
        </Link>
      </div>
      <div className="w-[95%] sm:w-[70%] mx-auto  flex flex-col justify-center items-center">
        <img
          className="w-[100px] mt-5"
          src="./images/hero-Icon.png"
          alt="icon"
        />
        <h1 className="text-3xl text-red-700 mt-3">Our Mission</h1>
        <p className="mt-6">
          At Ambula, we are deeply committed to the belief that every person
          deserves access to high-quality healthcare services. We believe in a
          democratic approach to health, and through the use of technology, we
          strive to make emergency and trauma care assistance more transparent,
          easily accessible, and user-friendly for all individuals in India. By
          bridging the communication gap in healthcare delivery, we hope to
          empower individuals to take control of their health and well-being. At
          Ambula, we are deeply committed to the belief that every person
          deserves access to high-quality healthcare services. We believe in a
          democratic approach to health, and through the use of technology, we
          strive to make emergency and trauma care assistance more transparent,
          easily accessible, and user-friendly for all individuals in India. By
          bridging the communication gap in healthcare delivery, we hope to
          empower individuals to take control of their health and well-being.
          Ambula, we are deeply committed to the belief that every person
          deserves access to high-quality healthcare services. We believe in a
          democratic approach to health, and through the use of technology, we
          strive to make emergency and trauma care assistance more transparent,
          easily accessible, and user-friendly for all individuals in India. By
          bridging the communication gap in healthcare delivery, we hope to
          empower individuals to take control of their health and well-being.
        </p>
      </div>
    </main>
  );
};

export default Home;
