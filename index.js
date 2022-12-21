const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/template');
const { generateHtml } = pageTemplate;
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let employeeInfo = [];

// creates an html file and displays a success message or gives error
function writeHtml() {
  const html = generateHtml(employeeInfo);
  fs.writeFile('./dist/team.html', html, (err) =>
    err
      ? console.log(err)
      : console.log(
          'We have successfully created profiles for your team members'
        )
  );
}

console.log('-----------------Welcome to the Team Profile Generator!-----------------');

// Prompt for managers info
inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the team manager's id?",
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the team manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
    },
  ])
  .then((answers) => {
    let managerInfo = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );
    employeeInfo.push(managerInfo);
    newMemberPrompt();
  });

// Prompts user to aks if they want to add another team memeber and what kind
function newMemberPrompt() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: [
          'Engineer',
          'Intern',
          'I do not want to add anymore team members',
        ],
      },
    ])
    .then((answers) => {
      if (answers.teamMember === 'Engineer') {
        engineerPrompt();
      } else if (answers.teamMember === 'Intern') {
        internPrompt();
      } else {
        writeHtml();
        return;
      }
    });
}

// Prompts user to get engineer info
function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the team engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the team engineer's id?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the team engineer's email?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is team engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      let engineerInfo = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.github
      );
      employeeInfo.push(engineerInfo);
      newMemberPrompt();
    });
}

// Prompts user for intern info
function internPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the team intern's name?",
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the team intern's id?",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the team intern's email?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the team intern's school?",
      },
    ])
    .then((answers) => {
      let internInfo = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.school
      );
      employeeInfo.push(internInfo);
      newMemberPrompt();
    });
}
