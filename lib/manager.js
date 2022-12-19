const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

const manager = new Manager('bob', 4, 'nick1@gmail.com', 100);

manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();

module.exports = Manager;
