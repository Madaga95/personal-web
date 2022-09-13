import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
          <li>Accueil</li>
        </NavLink>
        <li className="nav-portfolio">
          XP
          <ul className="nav-projects">
            <NavLink
              to="/experiences-1"
              className={(nav) =>
                nav.isActive ? "nav-active hover" : "hover"
              }>
              <li>Isoskele</li>
            </NavLink>
            <NavLink
              to="/experiences-2"
              className={(nav) =>
                nav.isActive ? "nav-active hover" : "hover"
              }>
              <li>Développeur Freelance</li>
            </NavLink>
            <NavLink
              to="/experiences-3"
              className={(nav) =>
                nav.isActive ? "nav-active hover" : "hover"
              }>
              <li>S.Télécom</li>
            </NavLink>
          </ul>
        </li>
        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              className={(nav) =>
                nav.isActive ? "nav-active hover" : "hover"
              }>
              <li>E-commerce</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              className={(nav) =>
                nav.isActive ? "nav-active hover" : "hover"
              }>
              <li>React world</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              className={(nav) =>
                nav.isActive ? "nav-active hover" : "hover"
              }>
              <li>App-note</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              className={(nav) =>
                nav.isActive ? "nav-active hover" : "hover"
              }>
              <li>Dashboard</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
