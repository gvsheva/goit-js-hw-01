"use strict";

import { getElementWidth } from "./task-3";

describe("getElementWidth", () => {
  const cases = [
    { content: "50px", padding: "8px", border: "4px", expected: 74 },
    { content: "60px", padding: "12px", border: "8.5px", expected: 101 },
    { content: "200px", padding: "0px", border: "0px", expected: 200 },
  ];

  for (const { content, padding, border, expected } of cases) {
    test(`content: ${content}, padding: ${padding}, border: ${border}`, () => {
      expect(getElementWidth(content, padding, border)).toBe(expected);
    });
  }
});
