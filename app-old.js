import http from "http";

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });

    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });

    // const personas = {
    //   id: 1,
    //   nombre: "Rodolfo",
    // };

    // res.write(JSON.stringify(personas));

    // res.write("id, nombre\n");
    // res.write("1, Fernando\n");
    // res.write("2, Maria\n");
    // res.write("3, Juan\n");
    // res.write("4, Pedro\n");

    res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");
