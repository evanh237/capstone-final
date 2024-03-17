import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import AllProducts from "./AllProducts";
import { getAllProducts, getSingleProduct } from "../api";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import NavBar from "./Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart" || []))
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user" || null))
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const cartArr = JSON.stringify(cart);
      localStorage.setItem("cart", cartArr);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchAllProducts();
  }, []);

  return (
    <div>
      <NavBar token={token} setToken={setToken} cart={cart} setCart={setCart} />
      <Routes>
        <Route
          path="/"
          element={
            <AllProducts products={products} setCart={setCart} cart={cart} />
          }
        />
        <Route
          path="/login"
          element={
            <Login setToken={setToken} setUser={setUser} setCart={setCart} />
          }
        />
        <Route
          path="/:productId"
          element={<SingleProduct setCart={setCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} products={products} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
