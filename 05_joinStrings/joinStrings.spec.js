const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Potato', () => {
    expect(values.firstName).toEqual('Potato');
  });
  test('lastName is Jonn', () => {
    expect(values.lastName).toEqual('Jonn');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1996', () => {
    expect(values.birthYear).toEqual(1996);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Potato Jonn and I am 29 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Potato Jonn', () => {
    expect(values.fullName).toEqual('Potato Jonn');
  });
  test('age is 29', () => {
    expect(values.age).toEqual(29);
  });
});
