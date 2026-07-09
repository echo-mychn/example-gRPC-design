import { credentials } from "@grpc/grpc-js";

import {
  GreeterClient,
  HelloReply,
  HelloReplyArray,
} from "../../generated/helloworld.js";

const client = new GreeterClient(
  "localhost:3001",
  credentials.createInsecure(),
);

export const greeterClient = {
  sayHello(name: string): Promise<HelloReply> {
    return new Promise((resolve, reject) => {
      client.sayHello(
        {
          name,
        },
        (error, response) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(response);
        },
      );
    });
  },

  sayHelloAgain(name: string): Promise<HelloReply> {
    return new Promise((resolve, reject) => {
      client.sayHelloAgain(
        {
          name,
        },
        (error, response) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(response);
        },
      );
    });
  },

  sayHelloArray(name: string): Promise<HelloReplyArray> {
    return new Promise((resolve, reject) => {
      client.sayHelloArray(
        {
          name,
        },
        (error, response) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(response);
        },
      );
    });
  },
};
