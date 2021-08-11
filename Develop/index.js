// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Project_Title",
    message: "What is your project title?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid title";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Description",
    message: "What is your project description?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid description";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Installation_Instructions",
    message: "How do you install your project?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid instructional text";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Usage",
    message: "How does someone use your project?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid set of usage instructions";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Contribution_Guidelines",
    message: "What are your project's contribution guidelines?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid set of project guidelines";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "Tests",
    message: "How is your project tested?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid set of testing methods";
      }
      return true;
    },
  },
];

const writeFileAsync = util.promisify(fs.writeFile);



const generateREADME = (answers) => `#${answers.Project_Title} This project is about creating a professional README docusing Node.js, improving our backend skills.

##Project Description:
${answers.Description}

##How to use our Project (Instructions:)
${answers.Installation_Instructions}

## Project Usage
${answers.Usage}

## Our contribution guilines are as follow:
${answers.Contribution_Guidelines}
`;


/* No idea how I can connect the top two. Might need to use Mini project suggestion */




// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then ((answers) => writeFileAsync("GeneratedREADME.md",generateREADME(answers))).then(()=>console.log("yes"))
.catch ((err) => console.log(err));
}


/* fs.writeFileSync( file, data, options ) */

 // Function call to initialize app
init();  





  /* Heap of nonsense, to be ignored until Meedaxa come sin */
/* // TODO: Create a function to write README file
function writetoREADME(fileName, data) {
    
}
*/
