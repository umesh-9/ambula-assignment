import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-[90%] h-[60px] mx-auto shadow-sm flex justify-between items-center ">
        <Link to="/">
          <img
            className="w-[100px] h-[32px] "
            src="./images/logo.png"
            alt="logo"
          />
        </Link>
        <nav className="flex ">
          <Link className="mr-2 font-semibold hover:font-bold" to="/">
            Home
          </Link>
          <Link className="mr-2 font-semibold hover:font-bold" to="about">
            About{" "}
          </Link>
          <Link className="mr-2 font-semibold hover:font-bold" to="contact">
            Contact Us
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
