import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

// import { useAuth } from "contexts/authContext";

function Header(props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //const { user, logout, userAttributes } = useAuth();
  const navbaRef = useRef();

  function handleBurger(event) {
    event.preventDefault();
    setIsMenuVisible((b) => !b);
  }

  function handleLogout(event) {
    event.preventDefault();
    // logout();
  }

  const burgerActive = isMenuVisible ? "is-active" : "";

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://logoipsum.com/logo/logo-11.svg"
            width="112"
            height="28"
            alt="Logo"
          />
        </Link>

        <a
          role="button"
          className={`navbar-burger burger`}
          aria-label="menu"
          aria-expanded="false"
          href="/"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {/* <a className="navbar-item">
            Home
          </a> */}
        </div>
        <div className="navbar-end">
          {/* <div className="navbar-item">
            <div className="buttons">
              <a className="button is-black">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div> */}
          {/* {!user && (
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/login" className="button is-primary">
                  <strong>Log in</strong>
                </Link>
              </div>
            </div>
          )}
          {user && (
            <>
              <div className="navbar-item">
                <p>Hola, {userAttributes.given_name}</p>
              </div>
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    className="button is-primary is-outlined"
                    href="/"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </a>
                </div>
              </div>
            </>
          )} */}
        </div>
      </div>
    </nav>
  );
}

export default Header;