'use strict';

const {} = require('../features/bmi');

describe('Display result', () => {
    it('BMI should return "Underweight" result', () => {});

    it('BMI should return "Correct" result', () => {});

    it('BMI should return "Overweight" result', () => {});

    it('BMI should return "I degree obesity" result', () => {});

    it('BMI should return "II degree obesity" result', () => {});

    it('BMI should return "Exceptional obesity" result', () => {});
});

describe('BMI commands', () => {
    it('Should return use if not all arguments are specified', () => {});

    it('Should return message if <bodyWeight> is string', () => {});

    it('Should return message if <growth> is string', () => {});
});

describe('Function arguments', () => {
    it('Should return message if <bodyWeight> less than 10', () => {});

    it('Should return message if <bodyWeight> greater than 250', () => {});

    it('Should return message if <growth> less than 100', () => {});

    it('Should return message if <growth> greater than 230', () => {});
});
