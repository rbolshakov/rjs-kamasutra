import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://marbnet.com/wp-content/sabai/File/thumbnails/41cc24d4338a3d926d85ba26ca9f832f.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
