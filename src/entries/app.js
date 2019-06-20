import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./appUwa";

const homeContainer = document.getElementById("home-container");

// --- render es recomendado cuando es una SPA, simplemente, una pagina basada en el cliente, renderizacion en el cliente
// render(
// --- hydrate es recomendado cuando es una UWAPP o Isomorphic App, renderizacion mezclada con el cliente / servidor
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  homeContainer
);
