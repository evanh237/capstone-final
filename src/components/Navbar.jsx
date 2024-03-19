import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="links">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>{/* <Link to="/checkout">Check Out</Link> */}</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
