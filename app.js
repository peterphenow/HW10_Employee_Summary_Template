const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//create an array to hold employee objects once created.
const finalEmployeeArr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let addManager = () => {
  inquirer
    .prompt([
      //figure out what type of team member to enter
      // {
      //   type: "list",
      //   message: "What team member are you entering?",
      //   name: "teamMember",
      //   choices: ["Manager", "Engineer", "Intern"],
      // },
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
      // {
      //   type: "input",
      //   message: "What is the name of the engineer?",
      //   name: "engineerName",
      //   when: function (answers) {
      //     //only run if user is entering an engineer
      //     return answers.teamMember === "Engineer";
      //   },
      // },
      // {
      //   type: "input:",
      //   message: "What is the engineer's ID?",
      //   name: "engineerId",
      //   when: function (answers) {
      //     //only run if user is entering an engineer
      //     return answers.teamMember === "Engineer";
      //   },
      // },
      // {
      //   type: "input",
      //   message: "What is the engineer's email?",
      //   name: "engineerEmail",
      //   when: function (answers) {
      //     //only run if user is entering an engineer
      //     return answers.teamMember === "Engineer";
      //   },
      // },
      // {
      //   type: "input",
      //   message: "What is the engineer's GitHub name?",
      //   name: "engineerGithub",
      //   when: function (answers) {
      //     //only run if user is entering an engineer
      //     return answers.teamMember === "Engineer";
      //   },
      // },
      // {
      //   type: "input",
      //   message: "What is the name of the intern?",
      //   name: "internName",
      //   when: function (answers) {
      //     //only run if user is entering an intern
      //     return answers.teamMember === "Intern";
      //   },
      // },
      // {
      //   type: "input:",
      //   message: "What is the intern's ID?",
      //   name: "internId",
      //   when: function (answers) {
      //     //only run if user is entering an intern
      //     return answers.teamMember === "Intern";
      //   },
      // },
      // {
      //   type: "input",
      //   message: "What is the intern's email?",
      //   name: "internEmail",
      //   when: function (answers) {
      //     //only run if user is entering an intern
      //     return answers.teamMember === "Intern";
      //   },
      // },
      // {
      //   type: "input",
      //   message: "What is the name of the intern's school?",
      //   name: "internSchool",
      //   when: function (answers) {
      //     //only run if user is entering an intern
      //     return answers.teamMember === "Intern";
      //   },
      // },
    ])
    .then(function (data) {
      const name = data.managerName;
      const id = data.managerId;
      const email = data.managerEmail;
      const officeNumber = data.managerPhone;

      const employee = new Manager(name, id, email, officeNumber);
      finalEmployeeArr.push(employee);
      //direct to ask if another employee needs to be entered
      addMoreEmployees();
      //console.log(finalEmployeeArr);
    });
};

//function to ask if another employee needs to be entered
let addMoreEmployees = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add another employee?",
        name: "addAnother",
        choices: ["Yes, an engineer", "Yes, an intern", "No"],
      },
    ])
    //directs to another function based on answer
    .then(function (data) {
      switch (data.addAnother) {
        case "Yes, an engineer":
          console.log("create engineer...");
          //addEngineer();
          break;
        case "Yes, an intern":
          console.log("create intern...");
          //addIntern();
          break;
        case "No":
          console.log("No...");
          //may need to have some other function here to render html...
          break;
      }
    });
};

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

addManager();
