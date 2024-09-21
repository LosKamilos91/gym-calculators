'use strict';

const { commandCLI } = require('../features/bmi');

const url = '../features/bmi.js';

describe('Display result', () => {
    const originalArgv = process.argv;

    afterEach(() => {
        process.argv = originalArgv;
    });

    it('BMI should return "Underweight" result', () => {
        process.argv = ['node', url, 50, 190];

        expect(commandCLI()).toMatch('Underweight');
    });

    it('BMI should return "Correct" result', () => {
        process.argv = ['node', url, 70, 190];

        expect(commandCLI()).toMatch('Correct');
    });

    it('BMI should return "Overweight" result', () => {
        process.argv = ['node', url, 100, 190];

        expect(commandCLI()).toMatch('Overweight');
    });

    it('BMI should return "First degree obesity" result', () => {
        process.argv = ['node', url, 110, 190];

        expect(commandCLI()).toMatch('First degree obesity');
    });

    it('BMI should return "Second degree obesity" result', () => {
        process.argv = ['node', url, 130, 190];

        expect(commandCLI()).toMatch('Second degree obesity');
    });

    it('BMI should return "Exceptional obesity" result', () => {
        process.argv = ['node', url, 150, 190];

        expect(commandCLI()).toMatch('Exceptional obesity');
    });
});

describe('BMI commands', () => {
    const originalArgv = process.argv;

    afterEach(() => {
        process.argv = originalArgv;
    });

    it('Should return use if no argument has been entered', () => {
        process.argv = ['node', url];

        expect(commandCLI()).toBe('Usage: npm run bmi <bodyWeight> <growth>');
    });

    it('Should return use when only one value has been entered', () => {
        process.argv = ['node', url, 50];

        expect(commandCLI()).toBe('Usage: npm run bmi <bodyWeight> <growth>');
    });

    it('Should return message if <bodyWeight> is a text', () => {
        process.argv = ['node', url, 'test', 190];

        expect(commandCLI()).toBe('Error: <bodyWeight> cannot be text');
    });

    it('Should return message if <growth> is text', () => {
        process.argv = ['node', url, 90, 'test'];

        expect(commandCLI()).toBe('Error: <growth> cannot be text');
    });

    it('Should return message if <bodyWeight> is empty', () => {
        process.argv = ['node', url, '', 190];

        expect(commandCLI()).toBe('Error: <bodyWeight> cannot be empty');
    });

    it('Should return message if <growth> is empty', () => {
        process.argv = ['node', url, 90, ''];

        expect(commandCLI()).toBe('Error: <growth> cannot be empty');
    });
});

describe('Function arguments', () => {
    const originalArgv = process.argv;

    afterEach(() => {
        process.argv = originalArgv;
    });

    it('Should return message if <bodyWeight> less than 10', () => {
        process.argv = ['node', url, 9, 190];

        expect(commandCLI()).toBe(
            'Error: Incorrect value for <bodyWeight>. Minimum value is 10'
        );
    });

    it('Should return message if <bodyWeight> greater than 250', () => {
        process.argv = ['node', url, 250.1, 190];

        expect(commandCLI()).toBe(
            'Error: Incorrect value for <bodyWeight>. Maximum value is 250'
        );
    });

    it('Should return message if <growth> less than 100', () => {
        process.argv = ['node', url, 90, 99.99];

        expect(commandCLI()).toBe(
            'Error: Incorrect value for <growth>. Minimum value is 100'
        );
    });

    it('Should return message if <growth> greater than 230', () => {
        process.argv = ['node', url, 90, 230.1];

        expect(commandCLI()).toBe(
            'Error: Incorrect value for <growth>. Maximum value is 230'
        );
    });
});
