import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const [solid, setSolid] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setSolid(true);
    } else {
      setSolid(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const navToggle = () => {
    setActive((prev) =>
      prev === "nav-menu" ? "nav-menu nav-active" : "nav-menu"
    );

    setToggleIcon((prev) =>
      prev === "nav-toggler" ? "nav-toggler toggle" : "nav-toggler"
    );
  };

  return (
    <nav className={solid ? "nav solid" : "nav"}>
      <NavLink to="/" exact>
        <h2 className="logo">E-სწავლე</h2>
      </NavLink>
      <ul className={active}>
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="link-active"
          >
            მთავარი
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about-us"
            className="nav-link"
            activeClassName="link-active"
          >
            ჩვენ შესახებ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/courses"
            className="nav-link"
            activeClassName="link-active"
          >
            კურსები
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="link-active"
          >
            კონტაქტი
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/profile"
            className="nav-link"
            activeClassName="link-active"
          >
            პროფილი
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/leaderboard"
            className="nav-link"
            activeClassName="link-active"
          >
            ლიდერბორდი
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            to="/sign-up"
            className="nav-link sign-up"
            activeClassName="link-active"
          >
            შესვლა
          </NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
};

export default Header;
