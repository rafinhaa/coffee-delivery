import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../Layout/DefaultLayout";
import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";
import { Finished } from "../pages/Finished";

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/finished" element={<Finished />} />
    </Route>
  </Routes>
);
