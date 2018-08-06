"use strict";

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var toCurrency = function toCurrency(x) {
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "USD";

  var input = "0";
  if (x) {
    input = isNumber(x) ? x.toString() : x;
  }
  var noPoints = input.replace(/\D/g, "");
  var noLeadingZeros = noPoints.replace(/^[0]+/g, "");
  var workableString = noLeadingZeros.length < 3 ? "" + "000".substr(0, 3 - noLeadingZeros.replace(/^[0]+/g, "").length) + noLeadingZeros : noLeadingZeros;
  var stringWithDecimal = workableString.substr(0, workableString.length - 2) + "." + workableString.substr(workableString.length - 2);
  var splitter = stringWithDecimal.split(".");
  var leftDecimal = splitter[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  var rightDecimal = splitter[1];
  return symbol + " " + leftDecimal + "." + rightDecimal;
};

var toIntegerString = function toIntegerString(x) {
  var input = "0";
  if (x) {
    input = isNumber(x) ? x.toString() : x;
  }
  var noPoints = input.replace(/\D/g, "");
  var noLeadingZeros = noPoints.replace(/^[0]+/g, "");
  return noLeadingZeros.length === 0 ? "0" : noLeadingZeros;
};

var toInteger = function toInteger(x) {
  var input = "0";
  if (x) {
    input = isNumber(x) ? x.toString() : x;
  }
  var noPoints = input.replace(/\D/g, "");
  var noLeadingZeros = noPoints.replace(/^[0]+/g, "");
  return parseInt(noLeadingZeros.length === 0 ? "0" : noLeadingZeros, 10);
};

exports.toCurrency = toCurrency;
exports.toIntegerString = toIntegerString;
exports.toInteger = toInteger;