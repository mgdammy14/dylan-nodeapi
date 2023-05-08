import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Participantes");
  res.json(rows);
});

app.post("/", async (req, res) => {
  // const { nombreCompleto, dni, rifas } = req.body;
  // const result = await pool.query(
  //   `INSERT INTO Participantes (nombreCompleto, dni, rifas) VALUES ("Clau", "8789323", 4)`
  // );
  // console.log(result);
  res.send("Datos insertados correctamente");
});

app.listen(PORT);
console.log("Server on port", PORT);
