import express, { Express, Request, Response } from "express";
import router from "./routes/userRoutes";
import { connectDb } from "./db";
import cors from "cors";

const app: Express = express();
app.use(cors());
const port = 3000;
connectDb();
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello,Express");
});

app.listen(port);
