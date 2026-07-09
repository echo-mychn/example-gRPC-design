# Getting Started

To generate these files based on the proto files created you must have the protoc compilier installed
`brew install protoc` for macOS

Example compile command

```bash
protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/generated \
  --ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,useExactTypes=true \
  -I ./proto \
  ./proto/*.proto
```

will compile all proto files in the proto directory and generate ts files to the directory /src/generated

Generated client files from protoc compilier. This replaces the loading process on the rpc server
Dynamic codegen loads proto file directly into the server and then register the service to the server

```javascript
const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, "../proto/helloworld.proto"),
);
const proto = grpc.loadPackageDefinition(packageDefinition);

server.addService(proto.greeter.Greeter.service, greeterHandler);
```

Static code gen (compilied proto code) will instead import the compilied client code from the compilier. The compilied ts files are the header files based on the proto file created

```javascript
import { GreeterService } from "../generated/helloworld";

server.addService(GreeterService, greeterHandler);
```
