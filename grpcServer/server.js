// RPC PRIVATE SERVER
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";
import { fileURLToPath } from "url";

import { greeterHandler } from "./grpc/greeterHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, "../proto/helloworld.proto"),
);

const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.greeter.Greeter.service, greeterHandler);

/* Example gRPC server with ssl credentials
const key = fs.readFileSync(
  path.join(__dirname, "certs/server.key")
);

const cert = fs.readFileSync(
  path.join(__dirname, "certs/server.crt")
);

const creds = grpc.ServerCredentials.createSsl(
  null,
  [{
    private_key: key,
    cert_chain: cert,
  }],
  false
);

server.bindAsync(
  "localhost:3001",
  creds,
  (error, port) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`gRPC server listening on localhost:${port}`);
  },
);
*/

server.bindAsync(
  "localhost:3001",
  grpc.ServerCredentials.createInsecure(), // this is where you would provide ssl certs to authenticate and encrypt communication for this server
  (error, port) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`gRPC server listening on localhost:${port}`);
  },
);
