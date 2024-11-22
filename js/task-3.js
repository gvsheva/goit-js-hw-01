"use strict";

function getElementWidth(content, padding, border) {
  const c = Number.parseFloat(content);
  const p = Number.parseFloat(padding);
  const b = Number.parseFloat(border);

  return c + 2 * p + 2 * b;
}

module.exports = { getElementWidth };
