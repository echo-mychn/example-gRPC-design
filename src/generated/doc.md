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
import { GreeterService } from "../generated/helloworld"

server.addService(GreeterService, greeterHandler)
```