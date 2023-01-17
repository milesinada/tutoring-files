import React from "react";

//store context describes the data / funtions that you want to share
//between components

const storeContext = React.createContext({
  cart: [],
  user: {},

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});

export default storeContext;
