// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//require Employee
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
