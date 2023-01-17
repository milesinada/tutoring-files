import storeContext from "../store/storecontext";
import { useContext } from "react";
import Product from "./product";
import CartItem from "./cartItem";

const Cart = () => {
  const { cart } = useContext(storeContext);
  return (
    <div>
      <h1>Your Cart contains {cart.length} products</h1>
      <div className="products">
        {cart.map((prod, index) => (
          <CartItem key={index} data={prod}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
