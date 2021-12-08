import React, { useContext, useState } from "react";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact, header } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const { homepage, title } = header;

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <React.Fragment>
      <nav className="center nav nav__main">
        <h3>
          {homepage ? (
            <a href="#about" className="link">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          {projects.length ? (
            <li className="nav__list-item">
              <a
                href="#projects"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Projects
              </a>
            </li>
          ) : null}

          {skills.length ? (
            <li className="nav__list-item">
              <a
                href="#skills"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Skills
              </a>
            </li>
          ) : null}

          {contact.email ? (
            <li className="nav__list-item">
              <a
                href="#contact"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Contact
              </a>
            </li>
          ) : null}
        </ul>

        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn--icon "
          aria-label="toggle theme"
        >
          {themeName === "dark" ? <Brightness2Icon /> : <WbSunnyRoundedIcon />}
        </button>

        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
