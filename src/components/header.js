import React from "react";
import onlingShopping from "./onlineShopping.jpg";

function Header() {
  return (
    <header className="block">
      <div>
        <h1>Welcome to JohnXue's online shop!</h1>
        <button>Shop Now!</button>
      </div>
      <div>
        <img src={onlingShopping} alt="onling-shopping" className="heroImg" />
      </div>
    </header>
  );
}

export default Header;
