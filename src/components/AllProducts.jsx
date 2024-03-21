import { useState, useEffect } from "react";
import { getAllProducts } from "../api";
import ProductCard from "./ProductCard";
import "./AllProducts.css";

const AllProducts = ({ products, setProducts, cart, setCart, token }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let fetchedProducts = await getAllProducts();
      if (selectedCategory) {
        fetchedProducts = fetchedProducts.filter(
          (product) => product.category.toLowerCase() === selectedCategory
        );
      }
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="category-selector">
        <button onClick={() => handleCategoryChange(null)}>All Products</button>
        <button onClick={() => handleCategoryChange("jewelery")}>
          Jewelery
        </button>
        <button onClick={() => handleCategoryChange("electronics")}>
          Electronics
        </button>
        <button onClick={() => handleCategoryChange("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => handleCategoryChange("women's clothing")}>
          Women's Clothing
        </button>
      </div>
      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              token={token}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AllProducts;
