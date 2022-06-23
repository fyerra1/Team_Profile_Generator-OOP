const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    console.log(answers);
    console.log(answers.role);
    employee(answers);
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

function employee(answers) {
  const employeeInfo = [answers.user, answers.id, answers.email];
  console.log(...employeeInfo);
}

getInfo();