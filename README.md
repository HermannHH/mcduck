mcduck
=========

Convert integers and string formatted integers to a properly formatted currency and back again to an integer/string formatted integer

[![Build Status](https://travis-ci.org/HermannHH/mcduck.svg?branch=master)](https://travis-ci.org/HermannHH/mcduck)

[![Coverage Status](https://coveralls.io/repos/github/HermannHH/mcduck/badge.svg?branch=master)](https://coveralls.io/github/HermannHH/mcduck?branch=master)

## Installation

  `npm install mcduck --save` or `yarn add mcduck --save`

## Usage

    RequireJS:

    const mcduck = require('mcduck');

    const formattedCurrency = mcduck.toCurrency('356660', 'USD');
    Output should be 'USD 3 566.60';
    const formattedCurrencyToInteger = mcduck.toInteger(formattedCurrency);
    Output should be 356660;
    const formattedCurrencyToIntegerString = mcduck.toIntegerString(formattedCurrency);
    Output should be '356660';

    es6:
    import mcduck from 'mcduck';

    const formattedCurrency = mcduck.toCurrency('356660', 'USD');
    Output should be 'USD 3 566.60';
    const formattedCurrencyToInteger = mcduck.toInteger(formattedCurrency);
    Output should be 356660;
    const formattedCurrencyToIntegerString = mcduck.toIntegerString(formattedCurrency);
    Output should be '356660';



## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.