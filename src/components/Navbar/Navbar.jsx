import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="accordion" smooth={true} offset={0} duration={500}>
            Accordion
          </Link>
        </li>
        <li>
          <Link to="about">About</Link> us
        </li>
        <li>
          <Link to="testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="contact" className="btn">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
