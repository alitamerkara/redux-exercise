import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { total } = useSelector((store) => store.cart);
  return (
    <div>
      <hr />
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Footer;
