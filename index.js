// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Please create the title for your README file',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Please write a description of your project',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Please enter the installation instructions for the project.',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Please note the usage information needed for your project.',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Please list your collaborators, if any, with links to their GitHub profiles.',
    name: 'credits'
  },
  {
    type: 'input',
    message: 'Please explain any details about the contribution guidlines for your application.',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'Please provide details and instructions about testing for your application.',
    name: 'test'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select the applicable license for your project out of the following:',
    choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3', 'GNU GPL v3', 'GNU AGPL v3', 'GNU LGPL v3', 'IBM', 'ISC', 'MIT', 'The Unlicense'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please supply your GitHub username.',
},
{
    type: 'input',
    name: 'email',
    message: 'Please present your email address.',
}
];

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
      fs.writeFileSync(`./${fileName}.md`, generate.generateMarkdown(data));
  }

    // TODO: Create a function to initialize app
    function init() {
      inquirer
          .prompt(questions)
          .then((data) => {
              writeToFile('newREADME', data);
          });
  }

    // Function call to initialize app
    init();
