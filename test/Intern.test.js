const Intern = require('../lib/Intern');

describe('Intern', () => {
  const internObject = new Intern('James', 2222, 'james@email.com', 'UW');

  test('get correct name', () => {
    expect(internObject.getName()).toBe('James');
  });

  test('get correct id', () => {
    expect(internObject.getId()).toBe(2222);
  });

  test('get correct email', () => {
    expect(internObject.getEmail()).toBe('james@email.com');
  });

  test('get correct school', () => {
    expect(internObject.getSchool()).toBe('UW');
  });

  test('get correct role', () => {
    expect(internObject.getRole()).toBe('Intern');
  });
})