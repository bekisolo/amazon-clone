import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51QPkHxDU6cWS6vbWtAgCsTYUlbGD6irtFgAwQ6VioeCM9Fug6FbbwqzZJinyPqORrn9qCaoVF69oMfnpBQ8mfHaU00sX1LJ9XH"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must login to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must login to access your Orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        {/* <Route path="orders" element={<Orders />} /> */}
        <Route path="cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing;
