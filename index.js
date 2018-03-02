'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var toCurrency = function(x, symbol='USD') {
  let input = '0';
  if (x) {
    input = isNumber(x) ? x.toString() : x;
  }
  const noPoints = input.replace(/\D/g, '');
  const noLeadingZeros = noPoints.replace(/^[0]+/g, '');
  const workableString = noLeadingZeros.length < 3 ? `${'000'.substr(0, 3 - noLeadingZeros.replace(/^[0]+/g, '').length)}${noLeadingZeros}` : noLeadingZeros;
  const stringWithDecimal = `${workableString.substr(0, workableString.length - 2)}.${workableString.substr(workableString.length - 2)}`;
  const splitter = stringWithDecimal.split('.');
  const leftDecimal = splitter[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const rightDecimal = splitter[1];
  return `${symbol} ${leftDecimal}.${rightDecimal}`;
};

var toIntegerString = function(x) {
  let input = '0';
  if (x) {
    input = isNumber(x) ? x.toString() : x;
  } 
  const noPoints = input.replace(/\D/g, '');
  const noLeadingZeros = noPoints.replace(/^[0]+/g, '');
  return noLeadingZeros.length === 0 ? '0' : noLeadingZeros;
}

var toInteger = function(x) {
  let input = '0';
  if (x) {
    input = isNumber(x) ? x.toString() : x;
  } 
  const noPoints = input.replace(/\D/g, '');
  const noLeadingZeros = noPoints.replace(/^[0]+/g, '');
  return parseInt(noLeadingZeros.length === 0 ? '0' : noLeadingZeros, 10);
}


exports.toCurrency = toCurrency;
exports.toIntegerString = toIntegerString;
exports.toInteger = toInteger;
