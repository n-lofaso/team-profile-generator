const Engineer = require('../lib/Engineer');

describe('Get', () => {
  it('able to get name of engineer', () => {
    const engineerName = 'bob';
    const testEngineer = new Engineer('bob', 69, 'mon@gmail.com', 'oloman');
    expect(testEngineer.getName()).toBe(engineerName);
  });

  it('able to get id of engineer', () => {
    const engineerId = 69;
    const testEngineer = new Engineer('bob', 69, 'mon@gmail.com', 'oloman');
    expect(testEngineer.getId()).toBe(engineerId);
  });

  it('able to get email of engineer', () => {
    const engineerEmail = 'mon@gmail.com';
    const testEngineer = new Engineer('bob', 69, 'mon@gmail.com', 'oloman');
    expect(testEngineer.getEmail()).toBe(engineerEmail);
  });

  it('able to get Github username of engineer', () => {
    const engineerGithub = 'oloman';
    const testEngineer = new Engineer('bob', 69, 'mon@gmail.com', 'oloman');
    expect(testEngineer.getGithub()).toBe(engineerGithub);
  });

  it('able to get role', () => {
    const engineerRole = 'Engineer';
    const testEngineer = new Engineer('bob', 69, 'mon@gmail.com', 'oloman');
    expect(testEngineer.getRole()).toBe(engineerRole);
  });
});
