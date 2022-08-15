import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Finished } from "../pages/Finished";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/finished" element={<Finished />} />
  </Routes>
);
