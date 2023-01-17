import storeContext from "./storecontext";
import { useState } from "react";

const GlobalState = (props) => {
  const [myCart, setMyCart] = useState([]);
  const [theUser, setTheUser] = useState({});

  const myAddToCart = (product) => {
    let copy = [...myCart];
    let found = false;
    for (let i = 0; i < copy.length; i++) {
      let existingProd = copy[i];

      if (product._id === existingProd._id) {
        existingProd.quantity += product.quantity;
        found = true;
      }
    }
    if (!found) {
      copy.push(product);
    }
    setMyCart(copy);
  };

  const myRemoveFromCart = (productId) => {
    console.log("Removing from cart:", productId);
    let copy = [...myCart];
    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (prod._id == productId) {
        copy.splice(i, 1);
      }
      setMyCart(copy);
    }
  };

  return (
    <storeContext.Provider
      value={{
        cart: myCart,
        user: theUser,
        addProductToCart: myAddToCart,
        removeProductFromCart: myRemoveFromCart,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};

export default GlobalState;
