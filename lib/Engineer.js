// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//require Employee
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
