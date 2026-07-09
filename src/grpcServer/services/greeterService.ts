import {
  HelloReply,
  HelloReplyArray,
} from "../../generated/helloworld.js";

export const greeterService = {

  sayHello(name: string): HelloReply {
    return {
      message: `Hello ${name}`,
    };
  },

  sayHelloAgain(name: string): HelloReply {
    return {
      message: `Hello again ${name}`,
    };
  },

  sayHelloArray(name: string): HelloReplyArray {
    return {
      letters: [...name],
    };
  },

};