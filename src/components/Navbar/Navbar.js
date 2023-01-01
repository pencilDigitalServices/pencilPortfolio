import "./Navbar.css"
import {FaDribbble, FaTwitter, FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom"
import pencilLogo from '../../images/logo.png'



export const socialIcons = [
    <FaYoutube />,
    <FaDribbble />,
    <FaTwitter />
]

export const Logo = (
    <Link to="/"  >
      <img src={pencilLogo} alt="pencillogo" className="logo"/>
    </Link>
)

export const navItems = [
    {
        name: "Home",
        id: "/"
    },
    {
        name: "About",
        id: "/about"
    },
    {
        name: "Projects",
        id: "/portfolio"
    },
    {
        name: "FAQ's",
        id: "/faq"
    },
    {
        name: "Appointment",
        id: "/appointment"
    }

];