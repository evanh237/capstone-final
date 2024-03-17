import CartItemCard from "./CartItemCard";
import { useEffect } from "react";

const Cart = ({ cart, products, setCart }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getCartItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => {
        const productItem = getCartItemDetails(item);

        return (
          <CartItemCard
            key={productItem?.id}
            cartItem={productItem}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;
