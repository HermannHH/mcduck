'use strict';

var expect = require('chai').expect;
var mcduck = require('../index');

describe('#toCurrency', function() {
    it('should convert integer string to currency', function() {
        var result = mcduck.toCurrency('1', 'ZAR');
        expect(result).to.equal('ZAR 0.01');
    });
    it('should convert integer to currency', function() {
        var result = mcduck.toCurrency(1, 'ZAR');
        expect(result).to.equal('ZAR 0.01');
    });
});