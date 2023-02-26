import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import OrderNav from "./OrderNav";
import { Wrap } from "./style";
import Generic from "../generic/index";

const Orders = () => {
  return (
    <Wrap>
      <Routes>
        <Route element={<OrderNav />}>
          <Route path="orders/new" element={<Generic />} />
          <Route path="orders/received" element={<Generic />} />
          <Route path="orders/sent" element={<Generic />} />
          <Route path="orders/closed" element={<Generic />} />
        </Route>
      </Routes>

    </Wrap>
  );
};

export default Orders;
