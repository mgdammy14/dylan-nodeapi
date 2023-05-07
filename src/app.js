import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = express();

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Participantes");
  res.json(rows);
});

app.post("/", async (req, res) => {
  const { nombreCompleto, dni, rifas } = req.body;
  const result = await pool.query(
    "INSERT INTO Participantes (nombreCompleto, dni, rifas) VALUES (?, ?, ?)",
    [nombreCompleto, dni, rifas]
  );
  console.log(result);
  res.send("Datos insertados correctamente");
});

app.listen(PORT);
console.log("Server on port", PORT);
