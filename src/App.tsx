import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./screens/Checkout/Checkout";
import Login from "./screens/Login/Login";
import Payment from "./screens/Payment/Payment";
import Orders from "./screens/Orders/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductPage from "./screens/ProductPage/ProductPage";
const promise = loadStripe(
  "pk_test_51I9B1sFXvKdi3zDx9kCu6TmY9GvRduSHO5owVTrmO64Fxn1fGGq6nta0nUSQUz7XilCIky4ybfKzLR0R8LG9btON00DGIc4lQz"
);

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/product/:productSlug">
            <Header />
            <ProductPage />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
