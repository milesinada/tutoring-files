import { getValue } from "@testing-library/user-event/dist/utils";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import storeContext from "../store/storecontext";

const Product = (props) => {
  let [quantity, setQuantity] = useState(1);
  const { addProductToCart, removeProductFromCart } = useContext(storeContext);

  const onQuantityChange = (value) => {
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
  };

  const pushToCart = () => {
    let prodToCart = {
      ...props.data,
      quantity: quantity,
    };
    addProductToCart(prodToCart);
  };
  return (
    <div className="product">
      <img className="product-img" src={props.data.image} alt="Product" />
      {/* <div className="hoverSpot"></div> */}
      <h5>{props.data.title}</h5>
      <div className="price">
        <label className="price">${props.data.price.toFixed(2)}</label>
        <label className="total">{getTotal()}</label>
      </div>
      <QuantityPicker onChange={onQuantityChange} />
      <button onClick={pushToCart} className="btn btn-sm btn-primary addCart">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

//test for git
