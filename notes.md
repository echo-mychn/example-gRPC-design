# Notes

## System Design
System design for a gRPC server should be layered in 3 different components:

### gRPC server
<br/>This is the overall server that will handle all services being called and where the server should be hosted at. (Look at server.js in this repo)

### gRPC layer
<br/>These files are gRPC handlers, they define and map the RPC methods/functions to the correct service and handle sending the request data (call) to the service needed for the business logic and responding back (callback) to the client when the service returned with the data requested. (Look at ./grpc/greeterHandler.js)

### gRPC service layer
<br/>These files implement the business logic for the calls. They should never be using gRPC call requests and callback responses. This is where the database queries should go in an actual application. (Look at ./services/helloWorld/greeterService.js)

## Proto Files
Think of these files as the model of your data for each different service. Each service will contain a number of methods that will correspond to what each client request is going to need. This can be broken up by services (i.e. Schedule service, User service, Provider service) and the implementation is left to the service layer code. Proto files will only define what method each service has, the data structure and type of both the request when the service is called, and what the server will respond with. [proto3 syntax documentation](https://protobuf.dev/reference/protobuf/proto3-spec/) lists what data types are available and the syntax of proto files.

## Express Implementation
The only component that will be utilizing express will be the client server (API Gateway). This handles accepting REST requests and calling the correct gRPC service from the gRPC server. That requires the API Gateway to load the same proto files that the gRPC server has in order to call the correct gRPC service in each route.

## Examples
js-example includes dynamic codegen examples and javascript only implementations
<br/>
src will contain typescript examples with static codegen files from the protoc compilier