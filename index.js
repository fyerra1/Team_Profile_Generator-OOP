const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const { generateManager, generateEngineer, generateIntern } = require('./src/html_template');
const generateHtml = require('./src/html_template');

const getInfo = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'Please provide employee name.',
    },
    {
      input: 'input',
      name: 'id',
      message: 'Please provide employee id.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide employee email.',
    },
    {
      type: 'list',
      name: 'role',
      message: "Please select employee's role.",
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'office',
      message: "Please provide Manager's office number.",
      when: (answers) => answers.role === 'Manager'
    },
    {
      type: 'input',
      name: 'github',
      message: "Please provide Engineer's github username.",
      when: (answers) => answers.role === 'Engineer'
    },
    {
      type: 'input',
      name: 'school',
      message: "Please provide Intern's school name.",
      when: (answers) => answers.role === 'Intern'
    },
  ])

  .then(answers => {
    pushInfo(answers);
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'add',
        message: 'Add another employee?'
      }
    ])
  })

  .then(answers => {
    if (answers.add) return getInfo()
  })
}

// const staff = {
//   manager: [],
//   engineer: [],
//   intern: []
// };

const staff = [];



function pushInfo(answers) {
  const employeeInfo = [answers.user, answers.id, answers.email];
  // console.log(...employeeInfo);

  switch(answers.role) {
    case 'Manager':
      staff.push(new Manager(...employeeInfo, answers.office));
      break;
    case 'Engineer':
      staff.push(new Engineer(...employeeInfo, answers.github));
      break;
    case 'Intern':
      staff.push(new Intern(...employeeInfo, answers.school));
      break;
  }

  pushStaff(staff);
}



function pushStaff(answers) {

const team = generateHtml(answers);
writeToFile(team);

console.log('team', team);
 
} 

getInfo();


function writeToFile(content) {
  fs.writeFile( "./dist/index.html", content, (error) => {
      if (error) {
        throw error;
      } else {
        console.log('File created!');
      }
    })
}