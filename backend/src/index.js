import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import countriesRouter from "./routes/countriesRouter.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET",
  })
);
app.use("/api/countries", countriesRouter);
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
