import React, { Component } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import { withRouter } from "react-router";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250} />
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            {/* !!!!!MALA, MALISIMA PRACTICA, que el instructor de React improviso mientras no haya SSR !!!! */}
            {/* -------------------------------------------------------------------------------------------- */}
            <li>
              <NavLink to="/v" activeClassName="is-selected">
                Redirect
              </NavLink>
            </li>
            {/* -------------------------------------------------------------------------------------------- */}
            {/* !!!!!MALA, MALISIMA PRACTICA, que el instructor de React improviso mientras no haya SSR !!!! */}
            <li>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/perfil" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
            {/* !!!!! Solo para efectos de demostracion del withRoute !!!! */}
            {/* !!!!! NO recomendable en un componente UI o puro !!!! */}
            {/* -------------------------------------------------------------------------------------------- */}
            <li>
              <button
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                Back 🔙
              </button>
            </li>
            {/* -------------------------------------------------------------------------------------------- */}
            {/* !!!!! Solo para efectos de demostracion del withRoute !!!! */}
            {/* !!!!! NO recomendable en un componente UI o puro !!!! */}
          </ul>
        </nav>
      </header>
    );
  }
}
//Aqui usamos withRouter porque deseamos tener acceso desde este componente
//a las propiedades y metodos del history, location y match
//desde un componente que no es usado desde el Route
export default withRouter(Header);
