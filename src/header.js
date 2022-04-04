import React from "react";
import { Link } from "react-router-dom";
import Logo from "./asset/logo.svg";
export const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <img className="logo-style" src={Logo} alt="alluvium" />
        </div>
        <div className="navsection">
          <ul className="navs">
            <li className="active">
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
