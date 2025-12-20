import "./Navbar.css";

type NavbarProps = {
  onSelect: (section: string) => void;
};

function Navbar({ onSelect }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => onSelect("home")}>
        Let’s Farm
      </div>

      <ul className="nav-links">
        <li onClick={() => onSelect("home")}>Home</li>
        <li onClick={() => onSelect("why")}>Why Farming</li>
        <li onClick={() => onSelect("challenges")}>Challenges</li>
        <li onClick={() => onSelect("vision")}>Vision</li>
        <li onClick={() => onSelect("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
