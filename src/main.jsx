import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { CartProvider } from "../src/component/CartContext";
import { AddressProvider } from "../src/component/address/AddressContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AddressProvider>
        <App />
      </AddressProvider>
    </CartProvider>
  </React.StrictMode>
);
