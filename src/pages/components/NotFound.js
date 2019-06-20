import React, { PureComponent } from "react";
import "./generic-page.css";
import { withRouter } from "react-router";

class NotFound extends PureComponent {
  handleForwardClick = () => {
    this.props.history.goForward();
  };

  handleBackClick = () => {
    //this.props.history.goBack();
    this.props.history.go(-2);
  };

  handleRandomClick = () => {
    const rnd = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${rnd}`);
  };
  render() {
    return (
      <div className="Page NotFound">
        <h1>404 </h1>
        <h3 className="sadFace">:(</h3>
        <h2>No hemos encontrado la pagina que buscabas</h2>
        <button className="Button" onClick={this.handleForwardClick}>
          Ir a la siguiente ruta 👉
        </button>
        <button className="Button" onClick={this.handleBackClick}>
          Ir a la anterior pagina 🔙
        </button>
        <button className="Button" onClick={this.handleRandomClick}>
          Ver Video Random
        </button>
      </div>
    );
  }
}

//export default NotFound;
export default withRouter(NotFound);
