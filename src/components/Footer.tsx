import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        Created by <strong>Kushal Patil</strong> &{" "}
        <strong>Yash Patil</strong>
      </p>

      <div className="footer-links">
        <Link to="/contact">Contact Us</Link>
      </div>

      <span className="footer-note">
        © {new Date().getFullYear()} Stock Master. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
