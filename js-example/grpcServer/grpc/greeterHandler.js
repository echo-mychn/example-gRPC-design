import { greeterService } from "../services/helloWorld/greeterService.js";

export const greeterHandler = {
  // call is the request, callback is the response back to client sending back the intended data
  SayHello(call, callback) {
    try {
      const result = greeterService.sayHello(call.request.name);
      callback(null, result);
    } catch (err) {
      callback({
        code: 13,
        message: err.message,
      });
    }
  },

  SayHelloAgain(call, callback) {
    try {
      const result = greeterService.sayHelloAgain(call.request.name);
      callback(null, result);
    } catch (err) {
      callback({
        code: 13,
        message: err.message,
      });
    }
  },

  SayHelloArray(call, callback) {
    try {
      const result = greeterService.sayHelloArray(call.request.name);
      callback(null, result);
    } catch (err) {
      callback({
        code: 13,
        message: err.message,
      });
    }
  },
};
