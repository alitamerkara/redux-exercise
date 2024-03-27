import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../control/cartSlice";

const Card = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div>
            <div>
              <img src={item.img} alt="" />
            </div>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <h3>quantity: {item.quantity}</h3>
            <button onClick={() => dispatch(decrease(item.id))}>
              Decrease
            </button>
            <button onClick={() => dispatch(increase(item.id))}>
              Increase
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
