import { Server, ServerCredentials } from "@grpc/grpc-js";

import { GreeterService } from "../generated/helloworld.js";
import { greeterHandler } from "./handler/greeterHandler.js";

const server = new Server();

server.addService(GreeterService, greeterHandler);

server.bindAsync(
  "0.0.0.0:3001",
  ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(`gRPC server listening on ${port}`);
  },
);
