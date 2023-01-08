import "./Navbar.css"
import { FaTwitter} from "react-icons/fa"
import { Link } from "react-router-dom";
import logo from '../../images/Logo.png'



export const socialIcons = [
  // <FaYoutube />,
  // <FaDribbble />,
  <a href="https://twitter.com/pencil_digitals" target="_blank" rel="noreferrer">
    <FaTwitter />
  </a>,
];

export const Logo = (
  <Link to="/" className="logo">
    <img src={logo} alt="line" className="logo-img" />
  </Link>
);

export const navItems = [
  {
    name: "Home",
    id: "/",
  },
  {
    name: "Clients",
    id: "#client",
  },
  {
    name: "Services",
    id: "#service",
  },
  {
    name: "Projects",
    id: "#portfolio",
  },
  {
    name: "Testimonials",
    id: "#testmonial",
  },
  {
    name: "Contact Us",
    id: "#contact",
  },
];