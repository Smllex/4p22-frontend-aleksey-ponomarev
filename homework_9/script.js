"use strict";

const getFibonacci = (
  (prev = 0, next = 1) =>
  () => {
    const result = prev + next;
    prev = next;
    next = result;
    return result;
  }
)();

//getFibonacci();
