const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  const engineerObject = new Engineer('James', 2222, 'james@email.com', 'james2');

  test('get correct name', () => {
    expect(engineerObject.getName()).toBe('James');
  })

  test('get correct id', () => {
    expect(engineerObject.getId()).toBe(2222);
  })

  test('get correct email', () => {
    expect(engineerObject.getEmail()).toBe('james@email.com');
  });

  test('get correct github', () => {
    expect(engineerObject.getGithub()).toBe('james2');
  });

  test('get correct role', () => {
    expect(engineerObject.getRole()).toBe('Engineer');
  });
})