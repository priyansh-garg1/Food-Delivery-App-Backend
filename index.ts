const express = require("express");
const path = require("path");

import { Request, Response } from "express";
import { AdminRoute, VendorRoute } from "./routes";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { MONGO_URI } from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const imagePath = path.join(__dirname, "../images");

app.use("/images", express.static(imagePath));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);


mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log("Connected to MongoDB DB");
  })
  .catch((error) => console.log(error));

app.listen(8000, () => {
  console.log("server listening on port 8000");
});
