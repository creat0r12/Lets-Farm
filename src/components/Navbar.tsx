import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

type NavbarProps = {
  onAccountClick: () => void;
  onChatClick: () => void;
};

interface User {
  name?: string;
  email?: string;
}

function Navbar({ onAccountClick, onChatClick }: NavbarProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const initial = user?.name
    ? user.name.charAt(0).toUpperCase()
    : "👤";

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo"></div>

      {/* CENTER NAV */}
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
          Help
          <div className="dropdown">
            <Link to="/location" className="dropdown-link">
              📍 Location-based insights
            </Link>
            <span className="dropdown-link" onClick={onChatClick}>
              💬 Chat with us
            </span>
            <Link to="/know-farming" className="dropdown-link">
              🌱 Know About Farming
            </Link>
          </div>
        </li>

        <li className="nav-item">
          Know More
          <div className="dropdown">
            <Link to="/HowWeWork" className="dropdown-link">
              ⚙️ How We Work
            </Link>
            <span className="dropdown-link">
              🤝 How we help farmers
            </span>
            <Link to="/vision" className="dropdown-link">
              🌱 Our Vision
            </Link>
          </div>
        </li>

        <li className="nav-item">
          Store
          <div className="dropdown">
            <Link to="/products" className="dropdown-link">
              🛒 Products
            </Link>
            <Link to="/store/ads" className="dropdown-link">
              📢 Ads
            </Link>
          </div>
        </li>
      </ul>

      {/* ACCOUNT CAPSULE */}
      <div className="account-capsule" onClick={onAccountClick}>
        <div className="account-avatar">
          <span className="avatar-initial">{initial}</span>
        </div>
        <span className="account-label">Account</span>
      </div>
    </nav>
  );
}

export default Navbar;
