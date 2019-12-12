import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";


class Header extends Component {

  render() {
    return (
      <header className="menu-wrapper">
        <div className="menu-brand">
          <div className="menu-brand-wrapper">
            <img src={logo} alt='logo-type' />
          </div>
          <div className="menu-brand-wrapper">
            <span><i className="fas fa-heart"></i> Favoritos </span>
          </div>
        </div>
        <nav className="menu-nav">
          <ul className="menu-list">
            <li className="menu-list-item"><a className="menu-list-link" href={"/#"}>¿Cómo funciona?</a></li>
            <li className="menu-list-item"><a className="menu-list-link" href={"/#"}>Soy propietario</a></li>
            <li className="menu-list-item"><a className="menu-list-link" href={"/#"}>Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;