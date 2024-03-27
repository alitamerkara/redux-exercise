import { useEffect } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { calculateTotal } from "./control/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <Card />
      <Footer />
      <div>atk</div>
    </>
  );
}

export default App;
