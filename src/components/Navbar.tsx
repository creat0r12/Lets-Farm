import { useState } from "react";
import "./Navbar.css";

type NavbarProps = {
  onSelect: (section: string) => void;
  isTopPanelOpen: boolean;
};

function Navbar({ onSelect, isTopPanelOpen }: NavbarProps) {
  const [active, setActive] = useState("home");

  const handleClick = (section: string) => {
    setActive(section);
    onSelect(section);
  };

  return (
    <nav className={`navbar ${isTopPanelOpen ? "navbar-panel-open" : ""}`}>
      <div className="logo" onClick={() => handleClick("home")}>
        Let’s Farm
      </div>

      <ul className="nav-links">
        <li className={active === "home" ? "active" : ""} onClick={() => handleClick("home")}>
          Home
        </li>
        <li className={active === "why" ? "active" : ""} onClick={() => handleClick("why")}>
          Why Farming
        </li>
        <li className={active === "challenges" ? "active" : ""} onClick={() => handleClick("challenges")}>
          Challenges
        </li>
        <li className={active === "vision" ? "active" : ""} onClick={() => handleClick("vision")}>
          Vision
        </li>
        <li className={active === "contact" ? "active" : ""} onClick={() => handleClick("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
