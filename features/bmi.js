'use strict';

let bmi;

function calculateBMI(bodyWeight, growth) {
    bmi = (bodyWeight / (growth / 100) ** 2).toFixed(2);

    return `Your BMI: ${bmi} - ${normsBMI()}`;
}

function commandCLI() {
    const args = process.argv.slice(2);
    const bodyWeight = args[0];
    const growth = args[1];

    if (bodyWeight === undefined || growth === undefined) {
        return 'Usage: npm run bmi <bodyWeight> <growth>';
    }

    if (bodyWeight === '') {
        return 'Error: <bodyWeight> cannot be empty';
    }

    if (growth === '') {
        return 'Error: <growth> cannot be empty';
    }

    if (typeof bodyWeight === 'string' || typeof growth === 'string') {
        const weight = bodyWeight;
        const grw = growth;

        if (isNaN(weight)) {
            return 'Error: <bodyWeight> cannot be text';
        } else if (isNaN(grw)) {
            return 'Error: <growth> cannot be text';
        } else {
            return calculateBMI(bodyWeight, growth);
        }
    }

    if (bodyWeight < 10) {
        return 'Error: Incorrect value for <bodyWeight>. Minimum value is 10';
    } else if (growth < 100) {
        return 'Error: Incorrect value for <growth>. Minimum value is 100';
    } else if (bodyWeight > 250) {
        return 'Error: Incorrect value for <bodyWeight>. Maximum value is 250';
    } else if (growth > 230) {
        return 'Error: Incorrect value for <growth>. Maximum value is 230';
    } else {
        return calculateBMI(bodyWeight, growth);
    }
}

function normsBMI() {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Correct';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
        return 'First degree obesity';
    } else if (bmi >= 35 && bmi < 40) {
        return 'Second degree obesity';
    } else {
        return 'Exceptional obesity';
    }
}

console.log(commandCLI());

module.exports = { commandCLI };
