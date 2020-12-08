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

//this is where all the logic begins: with creating a manager
let addManager = () => {
  inquirer
    .prompt([
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
    ])
    .then(function (data) {
      const name = data.managerName;
      const id = data.managerId;
      const email = data.managerEmail;
      const officeNumber = data.managerPhone;

      //create new manager object and push to array
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
    //directs to different functions based on answer
    .then(function (data) {
      switch (data.addAnother) {
        case "Yes, an engineer":
          console.log("-----------create engineer-----------");
          addEngineer();
          break;
        case "Yes, an intern":
          console.log("-----------create intern-----------");
          addIntern();
          break;
        case "No":
          createFile();
          break;
      }
    });
};

// list of questions to create an engineer code block
let addEngineer = () => {
  inquirer
    .prompt([
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
    ])
    .then(function (data) {
      const name = data.engineerName;
      const id = data.engineerId;
      const email = data.engineerEmail;
      const github = data.engineerGithub;

      //create new engineer object and push to array
      const employee = new Engineer(name, id, email, github);
      finalEmployeeArr.push(employee);
      //direct to ask if another employee needs to be entered
      addMoreEmployees();
    });
};

// list of questions to create an intern code block
let addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the intern?",
        name: "internName",
      },
      {
        type: "input:",
        message: "What is the intern's ID?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is the name of the intern's school?",
        name: "internSchool",
      },
    ])
    .then(function (data) {
      const name = data.internName;
      const id = data.internId;
      const email = data.internEmail;
      const school = data.internSchool;

      //create new intern object and push to array
      const employee = new Intern(name, id, email, school);
      finalEmployeeArr.push(employee);
      //direct to ask if another employee needs to be entered
      addMoreEmployees();
    });
};

//function to write the html output
const createFile = () => {
  // creates a folder named 'output' if one is not created yet
  //code found at https://www.geeksforgeeks.org/node-js-fs-mkdir-method/
  fs.mkdir(path.join(__dirname, "output"), { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });

  //writes the html file to the folder named 'output'
  fs.writeFile(outputPath, render(finalEmployeeArr), (err) =>
    err ? console.log(err) : console.log(`File successfully created in ${outputPath}`)
  );
};

//call function to begin creating a manager, this then calls other functions to continue the process
addManager();
