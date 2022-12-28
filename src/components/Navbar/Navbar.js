import "./Navbar.css"
import {FaDribbble, FaTwitter, FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom"



export const socialIcons = [
    <FaYoutube />,
    <FaDribbble />,
    <FaTwitter />
]

export const Logo = (
    <Link to="/" className="logo" >
      Pencil
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