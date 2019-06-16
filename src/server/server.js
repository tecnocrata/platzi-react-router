//Creando una UWA = Universal Web App
//Configurando BACKEND for FrontEnd
var express = require("express");

var app = express();

app.get("*", (req, res) => {
  console.log(req.url);
  //res.write("Hello from backend");
  res.write(`<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <title>Platzi Video</title>
      <!-- <link rel="stylesheet" href="dist/css/home.7646f097e8e64cbf8f09.css"> -->
    </head>

    <body>
      <div id="home-container">Hello from Backend</div>
      <div id="modal-container"></div>
      <script src="http://localhost:9000/js/app.js"></script>
      <!-- <script src="dist/js/home.7646f097e8e64cbf8f09.js"></script> -->
    </body>

    </html>`);
  res.end();
});

app.listen(3000);
