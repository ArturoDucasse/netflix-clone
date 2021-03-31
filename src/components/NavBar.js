import React, { useState, useEffect } from "react";

import "../Styles/module.navbar.css";

function NavBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY ? setShow(true) : setShow(false);
    });
    return () => {};
  }, []);

  return (
    <div className={`nav ${show && "nav-black"} }`}>
      <img
        className="nav-logo"
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      />
      <img
        className="nav-avatar"
        alt="Avatar logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </div>
  );
}

export default NavBar;
