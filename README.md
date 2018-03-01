mcduck
=========

Convert integers and string formatted integers to a properly formatted currency and back again to an integer/string formatted integer

## Installation

  `npm install mcduck --save` or `yarn dd mcduck --save`

## Usage

    RequireJS:

    var numFormatter = require('mcduck');

    var formattedNum = mcduck(35666);

    es6:
    import mcduck from 'mcduck';

    const formattedNum = mcduck(35666)
  
  Output should be `35,666`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.