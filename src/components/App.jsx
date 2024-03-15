import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import AllProducts from "./AllProducts";
import { getAllProducts, getSingleProduct } from "../api";
import SingleProduct from "./SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
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
      <Routes>
        <Route path="/" element={<AllProducts products={products} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
