'use strict';

var expect = require('chai').expect;
var toCurrency = require('../index');

describe('#toCurrency', function() {
    it('should convert single digits', function() {
        var result = toCurrency('1', 'ZAR');
        expect(result).to.equal('ZAR 0.01');
    });
});