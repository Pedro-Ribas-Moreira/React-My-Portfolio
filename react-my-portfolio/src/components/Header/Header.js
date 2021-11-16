import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
// import { ThemeContext } from "../../contexts/theme";

import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const navbarControl = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }

    console.log(show);
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarControl);
    return () => window.removeEventListener("scroll", navbarControl);
  }, []);

  {
    /* <div className={`nav ${show && 'nav_blue'}`}>
</div> */
  }

  return (
    <header className={`header center ${!show && "nav__shadow"}`}>
      <Navbar />
    </header>
  );
};

export default Header;
