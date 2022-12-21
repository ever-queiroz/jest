const sum = require('./sum');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

function calc(a, b, operation) {
    switch (operation) {
        case 'sum':
            return sum(a,  b);
            break;
        case 'subtract':
            return subtract(a,  b);
            break;
        case 'multiply':
            return multiply(a,  b);
            break;
        case 'divide':
            return divide(a,  b);
            break;
        default:
            break;

    }

}
module.exports = calc;
