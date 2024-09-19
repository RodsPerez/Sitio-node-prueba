import express from "express";
import path from "path";
import dotenv from "dotenv";

import hbs from "hbs";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico

app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.send("Home Page");
// });

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Rodolfo Pérez Cerecedo",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Rodolfo Pérez Cerecedo",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Rodolfo Pérez Cerecedo",
    titulo: "Curso de Node",
  });
});

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/templated-roadtrip/generic.html");
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/templated-roadtrip/elements.html");
// });

// app.get("/hola-mundo", (req, res) => {
//   res.send("Hola mundo en su respectiva ruta");
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
