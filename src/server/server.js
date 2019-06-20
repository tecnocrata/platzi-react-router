//Creando una UWA = Universal Web App
//Configurando BACKEND for FrontEnd
import express from "express";
import React from "react";
import App from "../../dist/ssr/app";
//import App from "../entries/appUwa";
//import App from "../entries/appTemp";

import ReactRouter, { StaticRouter, BrowserRouter } from "react-router";
import reactDOMServer from "react-dom/server";

const app = express();

//app.use(express.static("../../dist"));
app.use(express.static("dist"));
app.use("/images", express.static("images"));

app.get("*", (req, res) => {
  console.log(req.url);
  let context = { name: "Enrique" };
  const content = reactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  //   res.write("Hello from backend");
  console.log(content);
  //   res.write("------------");
  //   res.write(content);
  //   res.write("!!!!!!!!!");
  res.write(`<!DOCTYPE html>
        <html lang="en">

        <head>
          <meta charset="UTF-8">
          <title>Platzi Video</title>
          <!-- <link rel="stylesheet" href="dist/css/home.7646f097e8e64cbf8f09.css"> -->
          <link rel="stylesheet" href="/css/app.css">
        </head>

        <body>
          <div id="home-container">${content}</div>
          <div id="modal-container"></div>
          <!-- ESTA LINEA ES IDEAL PARA MODO DE DESARROLLO -->
          <!-- SI NO QUEREMOS ESTAR GENERANDO LA app.js CADA VEZ -->
          <!-- script src="http://localhost:9000/js/app.js"></script -->
          <script src="/js/app.js"></script>
        </body>

        </html>`);
  res.end();
});

app.listen(3001);

console.log("App running at port 3001");
