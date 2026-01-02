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
        {/* HOME */}
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        {/* HELP */}
        <li className="nav-item">
          Help
          <div className="dropdown">
            <Link to="/location" className="dropdown-link">
              📍 Location-based insights
            </Link>

            <Link to="/chat" className="dropdown-link">
              💬 Chat with us
            </Link>
            <Link to="/know-farming" className="dropdown-link">
              🌱 Know About Farming
            </Link>
          </div>
        </li>

        {/* KNOW MORE */}
        <li className="nav-item">
          Know More
          <div className="dropdown">
            <Link to="/HowWeWork" className="dropdown-link">
              ⚙️ How We Work
            </Link>
            <span>🤝How we help farmers</span>
            <Link to="/vision" className="dropdown-link">
              🌱 Our Vision
            </Link>
          </div>
        </li>
            


        {/* ACCOUNT */}
        <li className="nav-item" onClick={onAccountClick}>
          Account
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
