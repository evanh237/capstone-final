import { useState } from "react";
import "./CartItemCard.css";
const CartItemCard = ({
  cartItem,
  quantity,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  const [customQuantity, setCustomQauntity] = useState(1);

  const handleCustomQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setCustomQauntity(value);
  };

  const handleIncrement = () => {
    onIncrement(cartItem.id, 1);
  };

  const handleDecrement = () => {
    onDecrement(cartItem.id, 1);
  };

  const handleAddToCart = () => {
    onIncrement(cartItem.id, customQuantity);
  };

  const handleDelete = () => {
    onDelete(cartItem.id);
  };

  return (
    <div className="cart-item-card">
      <div className="cart-item-image-container">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-details">
        <h3>{cartItem?.title}</h3>
        <p>Price: ${cartItem?.price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="quantity-buttons">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div className="quantity-custom-button">
        <input
          type="numer"
          value={customQuantity}
          min="1"
          onChange={handleCustomQuantityChange}
        />
        <button onClick={handleAddToCart}>Add</button>
        <button onClick={handleDelete}>Remove All</button>
      </div>
    </div>
  );
};

export default CartItemCard;

//add logic to remove item from cart if quantity = 0,
//this is for single item cards, but add some kind of feedback that the item is added
