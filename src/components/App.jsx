import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import AllProducts from "./AllProducts";
import { getAllProducts, getSingleUser } from "../api";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import NavBar from "./Navbar";
import Checkout from "./Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        const parsedCart = JSON.parse(cartData);
        setCart(parsedCart);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error("error parsing cart data:", error);
      setCart([]);
    }

    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // getSingleUser();
  // console.log("get single user-->", getSingleUser(2));

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

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    setCart(null);
    navigate("/login");
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <div>
      <NavBar
        token={token}
        setToken={setToken}
        cart={cart}
        setCart={setCart}
        onLogout={handleLogout}
        user={user}
      />
      <Routes>
        <Route
          path="/"
          element={
            <AllProducts
              products={products}
              setProducts={setProducts}
              setCart={setCart}
              cart={cart}
              token={token}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              token={token}
              setToken={setToken}
              setUser={setUser}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/:productId"
          element={
            <SingleProduct setCart={setCart} cart={cart} token={token} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              token={token}
              products={products}
              setCart={setCart}
              resetCart={resetCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
              products={products}
              resetCart={resetCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
