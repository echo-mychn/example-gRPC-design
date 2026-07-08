// API Gateway
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import express from "express";

const packageDefinition = protoLoader.loadSync("../proto/helloworld.proto");
const proto = grpc.loadPackageDefinition(packageDefinition);

// client to call the rpc server, a client must be greated for each individual service regardless if they're registered to the same server.
//! even though we are creating a different client for different services, they will still reuse the same http2 channels required to send information between different servers. the client is just creating a stub in order for the data to be correctly serialized between the different servers
const greeterClient = new proto.greeter.Greeter(
  "localhost:3001",
  grpc.credentials.createInsecure(),
);

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json("potato"));
app.get("/api/hello", (req, res) => {
  greeterClient.SayHello(
    {
      name: "Ethan",
    },
    (error, response) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      }
      res.json(response);
    },
  );
});

app.get("/api/hello/:name", (req, res) => {
  greeterClient.SayHelloAgain(
    {
      name: req.params.name,
    },
    (error, response) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      }
      res.json(response);
    },
  );
});

app.get("/api/hello/letters/:name", (req, res) => {
  greeterClient.SayHelloArray(
    {
      name: req.params.name,
    },
    (error, response) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      }
      res.json(response);
    },
  );
});

app.listen(3000, () => {
  console.log("Gateway on localhost:3000");
});
