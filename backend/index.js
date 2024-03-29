import express from "express";
import { port, mongoDBURL } from "./config/config.mjs";
import mongoose from "mongoose";
import bookRouter from "./routes/bookRouter.mjs";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  console.log(req);
  return res.send("Welcome to Mern Stack");
});

app.use("/books", bookRouter);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected to Database");
    app.listen(port, () => {
      console.log(`App Listening to Port : ${port} `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
