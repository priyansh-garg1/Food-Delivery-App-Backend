import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

import { Application, Request, Response } from "express";
import { AdminRoute, CustomerRoute, ShoppingRoute, VendorRoute } from "../routes";
import bodyParser from "body-parser";

export default async (app: Application) => {

  dotenv.config()

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const imagePath = path.join(__dirname, "../images");

  app.use("/images", express.static(imagePath));

  app.use("/admin", AdminRoute);
  app.use("/vendor", VendorRoute);
  app.use("/customer",CustomerRoute )
  app.use("/shopping", ShoppingRoute);

  return app;
};
