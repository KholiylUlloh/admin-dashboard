import React from "react";
import { Route, Routes } from "react-router-dom";
import Generic from "./components/generic";
import Login from "./components/Login/Login";
import OrderNav from "./components/Orders/OrderNav";
import Orders from "./components/Orders/Orders";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Sidebar />}>
        <Route path="/orders" element={<Orders />} />
        <Route element={<OrderNav />}>
          <Route path="/orders/*" element={<Generic />} />
        </Route>
        <Route path="/products" element={<Generic />} />
        <Route path="/categories" element={<Generic />} />
        <Route path="/branches" element={<Generic />} />
      </Route>
    </Routes>
  );
};

export default App;
