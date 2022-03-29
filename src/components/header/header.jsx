import React from "react";

const Header = ({ onLogout }) => {
  return (
    <header>
      {onLogout && <button>Logout</button>}
      <h1>Card Manager</h1>
    </header>
  );
};

export default Header;
