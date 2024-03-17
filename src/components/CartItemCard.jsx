import "./CartItemCard.css";
const CartItemCard = ({ cartItem, quantity }) => {
  console.log("cart item-->", cartItem);

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
    </div>
  );
};

export default CartItemCard;
