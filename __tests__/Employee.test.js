const Employee = require('../lib/Employee');

describe('Get', () => {
  it('able to get name of employee', () => {
    const employeeName = 'bob';
    const testEmployee = new Employee('bob', 2, 'bob@gmail.com');
    expect(testEmployee.getName()).toBe(employeeName);
  });

  it('able to get id of employee', () => {
    const employeeId = 2;
    const testEmployee = new Employee('bob', 2, 'bob@gmail.com');
    expect(testEmployee.getId()).toBe(employeeId);
  });

  it('albe to get email of employee', () => {
    const employeeEmail = 'bob@gmail.com';
    const testEmployee = new Employee('bob', 2, 'bob@gmail.com');
    expect(testEmployee.getEmail()).toBe(employeeEmail);
  });

  it('able to get role', () => {
    const employeeRole = 'Employee';
    const testEmployee = new Employee('bob', 2, 'bob@gmail.com');
    expect(testEmployee.getRole()).toBe(employeeRole);
  });
});
