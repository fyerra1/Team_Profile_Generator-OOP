const Employee = require('../lib/Employee');

describe('Employee', () => {
  const example1 = new Employee('James', 2222, 'james@email.com');

  test('get correct name', () => {
    expect(example1.getName()).toBe('James');
  });

  test('get correct id', () => {
    expect(example1.getId()).toBe(2222);
  });

  test('get correct email', () => {
    expect(example1.getEmail()).toBe('james@email.com');
  });
})