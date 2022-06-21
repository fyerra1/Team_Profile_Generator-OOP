const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const userPrompts = () => {
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
      message: 'Please select employee.',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'office',
      message: 'Please provide office number.',
      when: (answers) => answers.role === 'Manager'
    }
  ])
}