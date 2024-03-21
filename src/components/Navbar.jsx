import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ token, onLogout }) => {
  return (
    <div className="links">
      <nav>
        <Link className="nav-link" to="/">
          All Products
        </Link>

        <Link className="nav-link" to="/cart">
          Cart
        </Link>
        <div className="user-greeting"></div>
      </nav>
      <div className="login-logout">
        {token ? (
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
