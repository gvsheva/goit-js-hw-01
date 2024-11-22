"use strict";

function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

module.exports = { getShippingMessage };