export const greeterService = {
  sayHello(name) {
    return {
      message: `Hello ${name}`,
    };
  },

  sayHelloAgain(name) {
    return {
      message: `Hello again ${name}`,
    };
  },

  sayHelloArray(name) {
    return {
      letters: name.split(""),
    };
  },
};
