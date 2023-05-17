import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51ISzS4G5oLdqdp8tUjrHUAbmIi06GhEexKVGTZsCodhgQFQgRiaHsW7SvBJ58PUm70uZH1aOdfFBm3UZ5Hm8S9WF0024ulihav');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
     
</Elements>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
