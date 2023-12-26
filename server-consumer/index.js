import express from "express";

import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(
      `Server started and running on http://localhost:${process.env.PORT}`
    )
);

import { run } from './utils/consumer.js'

run().catch("errooor",console.error)