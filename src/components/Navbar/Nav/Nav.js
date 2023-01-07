import React, { useState } from "react";
import { Link } from "react-router-dom";
import { socialIcons, Logo, navItems } from "../Navbar";
import "./Nav.css"

export default function Nav() {
  const [navMenu, setNavMenu] = useState(false);

  const closeMenu = () => {
    setNavMenu(false)
  }

  window.addEventListener("scroll", closeMenu)
  const hamburger = (
    <p
      className="hamburger-container"
      onClick={() => setNavMenu(!navMenu)}
    >
     {navMenu ? <div className="close"></div> : 
     <div className="hamburger">
        <span className="ham-span"></span>
        <span className="ham-span"></span>
        <span className="ham-span"></span>
      </div>}
    </p>
  );

  const dropDown = (
    <div className="show-nav-items">
      <div className="dropdown-close hamburger-container">{hamburger}</div>
      {navItems.map((l) => (
        <Link to={l.id} className="nav-item" onClick={() => setNavMenu(false)}>
          {l.name}
        </Link>
      ))}
    </div>
  );
  return (
    <div className="navbar">
      <div className="logo-container">{Logo}</div>
      <div className="nav-icon-container">
        {socialIcons.map((icon) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="nav-icon" href="https://twitter.com/pencil_digitals">
            {icon}
          </a>
          
        ))}
      </div>

      {hamburger}
      {navMenu && dropDown}
    </div>
  );
}
