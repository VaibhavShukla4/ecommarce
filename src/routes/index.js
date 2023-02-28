import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Account from "./Account";
const App = () => (
  <Routes>
    <Route path="/" element={<Account />}>
      <Route index element={<ProductList />} />
      <Route path="ProductList" element={<ProductList />} />
      <Route path="/Cart" element={<Cart />} />
    </Route>
  </Routes>
);
export default App;
