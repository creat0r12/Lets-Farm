import "./Navbar.css";
import { Link } from "react-router-dom";


type NavbarProps = {
  onAccountClick: () => void;
};

function Navbar({ onAccountClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo"></div>



      <ul className="nav-links">
        <li className="nav-item">
          Just For You
          <div className="dropdown">
            <Link to="/location" className="dropdown-link">
              📍 Location-based insights
            </Link>

            <span>🌾 Crop suggestions for your area</span>

            <span>💰 Market value & crop demand</span>

            <span>🌱 Organic farming suitability</span>

            <span>🧭 Personal farming guidance</span>
          </div>

        </li>

        <li className="nav-item">
          Our Role
          <div className="dropdown">
            <span>What we do</span>
            <span>How we help</span>
            <span>Our vision</span>
          </div>
        </li>

        {/* ACCOUNT TAB */}
        <li className="nav-item" onClick={onAccountClick}>
          Account
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

