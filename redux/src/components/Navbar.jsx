import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <div>
      <h2>Altaka</h2>
      <p>Quantity:{quantity} </p>
    </div>
  );
};

export default Navbar;
