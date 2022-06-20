const Employee = require('../lib/Employee');

describe('Employee', () => {
  const employeeObject = new Employee('James', 2222, 'james@email.com');

  test('get correct name', () => {
    expect(employeeObject.getName()).toBe('James');
  });

  test('get correct id', () => {
    expect(employeeObject.getId()).toBe(2222);
  });

  test('get correct email', () => {
    expect(employeeObject.getEmail()).toBe('james@email.com');
  });

  test('get correct role', () => {
    expect(employeeObject.getRole()).toBe('Employee');
  })
})