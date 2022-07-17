import React, { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <nav className="container">
      <button
        className={isActive ? "hamburger clicked" : "hamburger"}
        onClick={handleClick}
      >
        <div></div>
      </button>
      <ul className={isActive ? "nav__ul active" : "nav__ul"}>
        <li>
          <a href="#about">O nas</a>
        </li>
        <li>
          <a href="#categories">Oferta</a>
        </li>
        <li>
          <a href="#gallery">Galeria</a>
        </li>
        <li>
          <a href="#footer">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
