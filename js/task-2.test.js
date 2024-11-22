"use strict";

const { getShippingMessage } = require("./task-2");

describe("getShippingMessage", () => {
  const cases = [
    {
      country: "Australia",
      price: 120,
      deliveryFee: 50,
      expected: "Shipping to Australia will cost 170 credits",
    },
    {
      country: "Germany",
      price: 80,
      deliveryFee: 20,
      expected: "Shipping to Germany will cost 100 credits",
    },
    {
      country: "Sweden",
      price: 100,
      deliveryFee: 20,
      expected: "Shipping to Sweden will cost 120 credits",
    },
  ];
  for (const { country, price, deliveryFee, expected } of cases) {
    test(`country: ${country}, price: ${price}, deliveryFee: ${deliveryFee}`, () => {
      expect(getShippingMessage(country, price, deliveryFee)).toBe(expected);
    });
  }
});
