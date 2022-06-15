// TODO: Include packages needed for this application
const fs = require('fs');
const utils = require('./utils/utils.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    
    {
      type: 'input',
      message: 'What is the description?',
      name: 'description',
     
    },
    {
      type: 'input',
      message: 'What do you want in your Installation?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What is the use of this program?',
      name: 'Usage',
    },
    {
      type: 'rawlist',
      message: 'What is the license?',
      name: 'license',
      choices: [
        "MPL",
        "GPL",
        "Apache",
        "MIT",
        "CC",
        "BSD",
      ]
    },
    {
      type: 'input',
      message: 'What\'s your GitHub username?',
      name: 'gitHub',
    },
    {
      type: 'input',
      message: 'What is your Email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Who is Contributing to this project?',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'Explain how to test the program?',
      name: 'test',
    },
    
    
  ]

inquirer.prompt(questions)
  .then((response) => {
    //wrong here
    utils.generatePage(response);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();












// const init = async () => {
//   let result;
//   const data = await prompt(questions);
//   if (data.contact === "phone" || data.contact === "email") {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     const information = JSON.parse(utils.readFromFile(filename)) || [];

//     information.push(data);

//     utils.writeToFile(filename, information);

//     const { confirm } = await prompt([
//       {
//         type: 'confirm',
//         message: 'Would you like to enter your contact info?',
//         name: 'confirm'
//       }
//     ]);

//     if (!confirm) process.exit();

//     result = await prompt([
//       {
//         type: 'input',
//         name: data.contact,
//         message: `What is your ${data.contact}`
//       }
//     ]);

//     if (result) {
//       information[information.length - 1] = { ...data, ...result };
//       utils.writeToFile(filename, information);
//     }
//   }
// };

// init();