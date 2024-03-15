import ProductCard from "./ProductCard";
import "./AllProducts.css";

const AllProducts = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
export default AllProducts;
