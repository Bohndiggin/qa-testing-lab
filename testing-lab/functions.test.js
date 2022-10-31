const { returnTwo, greeting, add } = require('./functions');

test('does 2??', () => {
    expect(returnTwo()).toBe(2)
})

test('Is greet??', () => {
    expect(greeting('James')).toBe('Hello, James.')
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test('add good????', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})