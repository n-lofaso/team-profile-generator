const Intern = require('../lib/Intern');

describe('Get', () => {
  it('able to get name of intern', () => {
    const internName = 'bob';
    const testIntern = new Intern('bob', 24, 'bob@gmail.com', 'UP');
    expect(testIntern.getName()).toBe(internName);
  });

  it('able to get id of intern', () => {
    const internId = 24;
    const testIntern = new Intern('bob', 24, 'bob@gmail.com', 'UP');
    expect(testIntern.getId()).toBe(internId);
  });

  it('able to get email of intern', () => {
    const internEmail = 'bob@gmail.com';
    const testIntern = new Intern('bob', 24, 'bob@gmail.com', 'UP');
    expect(testIntern.getEmail()).toBe(internEmail);
  });

  it('able to get name of school', () => {
    const internGithub = 'UP';
    const testIntern = new Intern('bob', 24, 'bob@gmail.com', 'UP');
    expect(testIntern.getSchool()).toBe(internGithub);
  });

  it('able to get role', () => {
    const internRole = 'Intern';
    const testIntern = new Intern('bob', 24, 'bob@gmail.com', 'UP');
    expect(testIntern.getRole()).toBe(internRole);
  });
});
