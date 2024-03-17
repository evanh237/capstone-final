import ProductCard from "./ProductCard";
import "./AllProducts.css";

const AllProducts = ({ products, cart, setCart }) => {
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
};
export default AllProducts;
