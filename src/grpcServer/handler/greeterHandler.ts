import {
  GreeterServer,
  HelloReply,
  HelloReplyArray,
} from "../../generated/helloworld.js";

import { greeterService } from "../services/greeterService.js";

export const greeterHandler: GreeterServer = {
  sayHello(call, callback) {
    const response: HelloReply = greeterService.sayHello(call.request.name);

    callback(null, response);
  },

  sayHelloAgain(call, callback) {
    const response: HelloReply = greeterService.sayHelloAgain(
      call.request.name,
    );

    callback(null, response);
  },

  sayHelloArray(call, callback) {
    const response: HelloReplyArray = greeterService.sayHelloArray(
      call.request.name,
    );

    callback(null, response);
  },
};
