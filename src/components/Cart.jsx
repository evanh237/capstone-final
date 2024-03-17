import CartItemCard from "./CartItemCard";
import { useEffect, useState } from "react";

const Cart = ({ cart, products, setCart }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => {
        const productItem = getCartItemDetails(item);
        return acc + (productItem ? productItem.price * item.quantity : 0);
      },

      0
    );

    setCartTotal(total);
  }, [cart, products]);

  const getCartItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  const handleIncrement = (productId, quantityToAdd) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId) {
        return {
          ...item,
          quantity: item.quantity + quantityToAdd,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (productId, quantityToSubtract) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId) {
        const newQuantity = item.quantity - quantityToSubtract;
        const updatedQuantity = Math.max(newQuantity, 0);
        return {
          ...item,
          quantity: updatedQuantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

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
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        );
      })}
      <div>Cart Total: ${cartTotal}</div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
