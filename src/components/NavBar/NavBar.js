import React from "react";
import "./_NavBar.styles.scss";

function NavBar() {
  return (
    <div className="navbar-width">
      <div className="input-width">
        <img src="./images/logo3.png" className="input-image"></img>
        <input placeholder="Nunca dejes de buscar" className="input-input" />
        <button type="submit">
          <img src="./images/lupa.webp" className="input-search-button"></img>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
