"use strict";

const { makeTransaction } = require("./task-1");

describe("makeTransaction", () => {
  const cases = [
    {
      quantity: 5,
      pricePerDroid: 3000,
      expected: "You ordered 5 droids worth 15000 credits!",
    },
    {
      quantity: 3,
      pricePerDroid: 1000,
      expected: "You ordered 3 droids worth 3000 credits!",
    },
    {
      quantity: 10,
      pricePerDroid: 500,
      expected: "You ordered 10 droids worth 5000 credits!",
    },
  ];
  for (const { quantity, pricePerDroid, expected } of cases) {
    test(`quantity: ${quantity}, pricePerDroid: ${pricePerDroid}`, () => {
      expect(makeTransaction(quantity, pricePerDroid)).toBe(expected);
    });
  }
});
