// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//require employee
const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
