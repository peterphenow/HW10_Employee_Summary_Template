const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//create array of inquirer questions to ask if entering a manager to the team
let inquirerManager = [
  {
    type: "input",
    message: "What is the name of the manager?",
    name: "managerName",
  },
  {
    type: "input:",
    message: "What is the manager's ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the manager's office phone number?",
    name: "managerPhone",
  },
];

//create list of questions for entering an engineer
let inquirerEngineer = [
  {
    type: "input",
    message: "What is the name of the engineer?",
    name: "engineerName",
  },
  {
    type: "input:",
    message: "What is the engineer's ID?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub name?",
    name: "engineerGithub",
  },
];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
  //figure out what type of team member to enter
  {
    type: "list",
    message: "What team member are you entering?",
    name: "teamMember",
    choices: ["Manager", "Engineer", "Intern"],
  },
]);

//need to figure out how to get this switch statement in the inquirer prompt
switch (teamMember) {
  case "Manager":
    inquirerManager;
    break;
  case "Engineer":
    inquirerEngineer;
    break;
  case "Intern":
    inquirerIntern;
    break;
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
