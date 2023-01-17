import storeContext from "../store/storecontext";
import { useContext } from "react";
import "./cartItem.css";

const CartItem = (props) => {
  const { removeProductFromCart } = useContext(storeContext);

  const removeFromCart = () => {
    removeProductFromCart(props.data._id);
  };

  return (
    <div>
      <div className="cart-item-card">
        <div className="cart-item-image">
          <img src={props.data.image} alt="Product" />
        </div>
        <div className="cart-item-info">
          <label className="cart-item-title">
            <h4>{props.data.title}</h4>
          </label>
          <h6>Price</h6>
          <label className="cart-item-price">${props.data.price}</label>
          <h6>Quantity</h6>
          <label className="cart-qnty">{props.data.quantity}</label>
          <h6>Total Price</h6>
          <label className="cart-total">
            ${(props.data.price * props.data.quantity).toFixed(2)}
          </label>
        </div>
        <button onClick={removeFromCart} className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
