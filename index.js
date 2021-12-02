const http = require("http");

const hostname = "localhost";

/*
La reglas:
1. Incluir modulos y depencias
2. COnfigurar express con el motor de plantillas
3. Definir los middleware
4. Definicion de rutas
5. COnectar a BD
6. Iniciar al app / servidor
*/

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const session = require("express-session");
const ejsLayout = require("express-ejs-layouts");

// Dependencias
const r1 = require("./routes/rutas.js");

// instanciar Express
const app = express();
app.set("port", process.env.port || 3000);
app.set("env", "development"); // test stage preview production

// Motor de plantillas
app.set("view cache", "false");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "../layouts/plantilla1");

// Middleware
app.use(ejsLayout);
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(morgan("combined"));

app.use(cookieParser());
app.use(
  session({
    secret: "frase clave",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.static(__dirname + "/public"));

// La aplicacion debe estar en ...
// Esta parte la hizo el alumno 1
app.use("/", r1);

// Instanciar el server
const server = http.createServer(app);
server.listen(app.get("port"), hostname, () => {
  console.log(`Servidor iniciado en puerto ... ${app.get("port")}`);
});
