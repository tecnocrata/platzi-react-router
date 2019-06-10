import React, { PureComponent } from "react";
import "./generic-page.css";

class NotFound extends PureComponent {
  render() {
    return (
      <div className="Page NotFound">
        <h1>404 </h1>
        <h3 className="sadFace">:(</h3>
        <h2>No hemos encontrado la pagina que buscabas</h2>
      </div>
    );
  }
}

export default NotFound;
