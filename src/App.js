import React from "react";
import { Route, Routes } from "react-router-dom";
import Generic from "./components/generic";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/orders" element={<Generic />} />
    </Routes>
  );
};

export default App;
