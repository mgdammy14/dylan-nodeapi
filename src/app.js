import express from "express";
const cors = require("cors");
import { pool } from "./db.js";
import { PORT } from "./config.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Participantes");
  res.json(rows);
});

app.get("/test", async (req, res) => {
  const { nombreCompleto, dni, rifas } = req.query;
  const result = await pool.query(
    "INSERT INTO Participantes (nombreCompleto, dni, rifas) VALUES (?, ?, ?)",
    [nombreCompleto, dni, rifas]
  );
  console.log(nombreCompleto, dni, rifas);
  res.send("Datos insertados correctamente");
});

app.listen(PORT);
console.log("Server on port", PORT);
