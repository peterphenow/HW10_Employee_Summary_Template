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
          console.log("-----------create engineer-----------");
          addEngineer();
          break;
        case "Yes, an intern":
          console.log("-----------create intern-----------");
          addIntern();
          break;
        case "No":
          console.log("You have completed all entries");
          //console.log(finalEmployeeArr);
          // console.log(createHTML());
          //console.log(renderMain);
          createFile();
          break;
      }
    });
};

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

      const employee = new Engineer(name, id, email, github);
      finalEmployeeArr.push(employee);
      //console.log(finalEmployeeArr);
      //direct to ask if another employee needs to be entered
      addMoreEmployees();
    });
};

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

      const employee = new Intern(name, id, email, school);
      finalEmployeeArr.push(employee);
      //console.log(finalEmployeeArr);
      //direct to ask if another employee needs to be entered
      addMoreEmployees();
    });
};

// const createHTML = () => {
//   //console.log(render(finalEmployeeArr));
//   render(finalEmployeeArr);

//   createFile();
// };

const createFile = () => {
  fs.writeFile(outputPath, render(finalEmployeeArr), (err) =>
    err ? console.log(err) : console.log(`File successfully created in ${outputPath}`)
  );
};

// const htmlStart = `
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//       crossorigin="anonymous"
//     />
//     <title>My Team</title>
//   </head>
//   <body>
// `;

// const htmlEnd = `
// </body>
// </html>
// `;

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
