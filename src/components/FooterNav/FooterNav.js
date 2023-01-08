import React from 'react'
import "./FooterNav.css"
import { Logo, navItems, socialIcons } from '../Navbar/Navbar'

function FooterNav() {
  return (
    <div className="footer-container">
      <div className="footer-nav-container">
        <div className="footer-navigation">
          {navItems.map((l) => (
            <a className="footer-nav-item" href={l.id}>
              {l.name}
            </a>
          ))}
        </div>
        <div className="footer-socials">
          {socialIcons.map((icon) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              className="footer-social-icon"
              href="https://twitter.com/pencil_digitals"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <footer className="footer-logo-container">{Logo}</footer>
      1028 Lexington Ave, New York Ny 10028 NY 10028
      <h6>Copyright @2023 Pencil All rights reserved.</h6>
    </div>
  );
}

export default FooterNav