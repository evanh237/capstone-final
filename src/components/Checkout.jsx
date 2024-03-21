import { useState, useEffect } from "react";
import "./Checkout.css";

const Checkout = ({ resetCart }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const cartData = queryParams.get("cart");
    const cartTotalData = queryParams.get("cartTotal");

    if (cartData && cartTotalData) {
      setCart(JSON.parse(cartData));
      setCartTotal(parseFloat(cartTotalData));
    } else {
      setCart([]);
      setCartTotal(0);
      localStorage.removeItem("cartTotal");
    }
  }, []);

  const handlePlaceOrder = () => {
    setOrderSuccess(true);
    setCart([]);
    setCartTotal(0);
    localStorage.removeItem("cartTotal");
    resetCart();
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div>Cart Total: ${cartTotal.toFixed(2)}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <button
          className="checkout-btn"
          onClick={handlePlaceOrder}
          disabled={cart.length === 0}
        >
          Place Order
        </button>
        {orderSuccess ? <p>Your Order has been placed!</p> : null}
      </form>
    </div>
  );
};

export default Checkout;
