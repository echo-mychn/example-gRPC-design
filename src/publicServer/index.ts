import express from "express";
import { greeterClient } from "./clients/greeterClient.js";

const app = express();

app.use(express.json());

app.get("/api/hello", async (req, res) => {
  try {
    const response = await greeterClient.sayHello("Ethan");

    return res.json(response);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "gRPC request failed",
    });
  }
});

app.get("/api/hello/:name", async (req, res) => {
  try {
    const response = await greeterClient.sayHelloAgain(req.params.name);

    return res.json(response);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "gRPC request failed",
    });
  }
});

app.get("/api/letters/:name", async (req, res) => {
  try {
    const response = await greeterClient.sayHelloArray(req.params.name);

    return res.json(response);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "gRPC request failed",
    });
  }
});

app.listen(3000, () => {
  console.log("public server listening on localhost:3000");
});
