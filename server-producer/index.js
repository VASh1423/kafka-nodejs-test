import express from "express";
import testRouter from "./routes/test.routes.js";

import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/test", testRouter);

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(
      `Server started and running on http://localhost:${process.env.PORT}`
    )
);