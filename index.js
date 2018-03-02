'use strict';

var toCurrency = function(x) {
  let input = '0';
  if (x) {
    input = x;
  }
  const noPoints = input.replace(/\D/g, '');
  const noLeadingZeros = noPoints.replace(/^[0]+/g, '');
  const workableString = noLeadingZeros.length < 3 ? `${'000'.substr(0, 3 - noLeadingZeros.replace(/^[0]+/g, '').length)}${noLeadingZeros}` : noLeadingZeros;
  const stringWithDecimal = `${workableString.substr(0, workableString.length - 2)}.${workableString.substr(workableString.length - 2)}`;
  const splitter = stringWithDecimal.split('.');
  const leftDecimal = splitter[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const rightDecimal = splitter[1];
  return `ZAR ${leftDecimal}.${rightDecimal}`;
};
// var myFunc2 = function() { ... };
// exports.myFunc1 = myFunc1;
exports.toCurrency = toCurrency;
