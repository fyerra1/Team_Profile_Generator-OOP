const Manager = require('../lib/Manager');

describe('Manager', () => {
  const managerObject = new Manager('James', 2222, 'james@email.com', 33);

  test('get correct name', () => {
    expect(managerObject.getName()).toBe('James');
  });

  test('get correct id', () => {
    expect(managerObject.getId()).toBe(2222);
  });

  test('get correct email', () => {
    expect(managerObject.getEmail()).toBe('james@email.com');
  });

  test('get correct office number', () => {
    expect(managerObject.getOfficeNumber()).toBe(33);
  });

  test('get correct role', () => {
    expect(managerObject.getRole()).toBe('Manager');
  });
})