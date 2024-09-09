import express from "express";
import App from "./services/ExpressApp";
import dbConenection from "./services/Database";

const StartServer = async () => {
  const app = express();

  await dbConenection();

  await App(app);

  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
};

StartServer();
