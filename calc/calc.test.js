const calc = require('./calc');

test('simulate calc', () => {
    expect(calc(2, 2, 'sum')).toBe(4);
    expect(calc(4, 1, 'subtract')).toBe(3);
    expect(calc(3, 12, 'multiply')).toBe(36);
    expect(calc(36, 2, 'divide')).toBe(18);
});
