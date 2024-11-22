"use strict";

function getElementWidth(content, padding, border) {
  const c = Number.parseFloat(content);
  const p = Number.parseFloat(padding);
  const b = Number.parseFloat(border);

  return c + 2 * p + 2 * b;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
