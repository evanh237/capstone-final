import "./ProductCard.css";
import { useNavigate } from "react-router";
import { useState } from "react";

const ProductCard = ({ product, isSingle, cart, setCart, token }) => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  const handleDetails = () => {
    navigate(`${product.id}`);
  };

  const handleAddToCart = () => {
    const productId = product.id;
    const existingCartItemIndex = cart.findIndex(
      (item) => item.productId === productId
    );
    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { productId, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
    }
    setFeedbackMessage("Added to cart!");
    setTimeout(() => {
      setFeedbackMessage("");
    }, 3000);
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
        {feedbackMessage && (
          <p className="feedback-message">{feedbackMessage}</p>
        )}
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
      {token && (
        <button onClick={handleAddToCart} className="cart-button">
          Add to Cart
        </button>
      )}
    </div>
  );
};
export default ProductCard;
