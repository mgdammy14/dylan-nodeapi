import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = express();

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM Participantes");
  res.json(rows);
});

app.get("/ping", async (req, res) => {
  const result = await pool.query(`SELECT "hello world" as RESULT`);
  console.log(result);
});

app.listen(PORT);
console.log("Server on port", PORT);
