import "./ProductCard.css";
import { useNavigate } from "react-router";

const ProductCard = ({ product, isSingle }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  const handleDetails = () => {
    navigate(`${product.id}`);
  };
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        {isSingle && <p className="description">{product.description}</p>}
        <p className="price">${product.price}</p>
        <p className="product-rating">
          Customer Rating {product.rating.rate}/5
        </p>
        <p className="ratings-amount">
          Number of Reviews {product.rating.count}
        </p>
        <p className="category">Category: {product.category}</p>
      </div>
      {isSingle ? (
        <button className="go-back" onClick={handleGoBack}>
          Go Back
        </button>
      ) : (
        <button onClick={handleDetails} className="details-button">
          See Details
        </button>
      )}

      <button className="cart-button">Add to Cart</button>
    </div>
  );
};
export default ProductCard;
