import React from "react";
import logo from "./../assets/images/logos/white-logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bars"></i> Menu
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    ALL
                  </a>
                  <a className="dropdown-item" href="#">
                    Cool prints
                  </a>
                  <a className="dropdown-item" href="#">
                    Winter collection
                  </a>
                  <a className="dropdown-item" href="#">
                    Basics
                  </a>
                </div>
              </li>
            </ul>
            <form className="search " action="/">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button className="btn " type="submit" id="button-addon2">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <ul className="navbar-nav  text-center">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i className="fas fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="nav-header">
        Free shipping on order over 500 EGP!
      </header>
    </>
  );
};

export default Navbar;
