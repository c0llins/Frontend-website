import React from "react";
// import "../css/App.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
function Navbar() {
  return (
    <header>
      <div className="top-header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-7 col-sm-12">
              <div className="header-address">
                <a href="#a">
                  <i className="la la-phone-square"></i>
                  <span>+55 (67) 98823-1232</span>
                </a>
                <a href="#a">
                  <i className="la la-map-marker"></i>
                  <span>Ponta Porã - MS / Brasil</span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-md-5 col-sm-12">
              <div className="header-social">
                <a href="http://facebook.com/medicasa.com.br">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="http://instagram.com/medicasa.com.br">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header shd">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand">
                  <img src={logo} alt="" />
                </Link>

                <button
                  className="menu-button"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                >
                  <span className="icon-spar"></span>
                  <span className="icon-spar"></span>
                  <span className="icon-spar"></span>
                </button>

                <div className="navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                      <Link to="/" className="nav-link">
                        Ínicio
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link to="/contact" className="nav-link">
                        Contato
                      </Link>
                    </li>
                  </ul>
                  <div className="d-inline my-2 my-lg-0">
                    <ul className="navbar-nav">
                      <li className="nav-item submit-btn">
                        <Link
                          to="/contact"
                          className="my-2 my-sm-0 nav-link sbmt-btn"
                        >
                          <i className="icon-plus"></i>
                          <span>Enviar minha casa</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <a href="#a" title="" className="close-menu">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
