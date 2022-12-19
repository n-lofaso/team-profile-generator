class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

const employee = new Employee('Bob', 12, 'bob12@gmail.com');

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;
