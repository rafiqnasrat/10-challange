const inquirer = require("inquirer");
const Empolyee = require("./lib/empolyee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const fs = require("fs");
const CreateHTML = require("./src/createHTML");
const dataArray = [];

// PROMT FOR MANAGER
const managerPrompt = ()=>
{
    inquirer
  .prompt([
    {
        type: "input",
        name: "managerId",
        message: "Enter manager id:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
        type: "input",
        name: "managerName",
        message: "Enter manager name:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter manager email:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter office number:",
      validate: function(input)
      {
          if(input == "")
          {
            return false;
          }
        return true;

      }
  },
  ])

  .then((answers) => {
    let ManagerObj = new Manager(answers.managerId, answers.managerName, answers.managerEmail, answers.managerOfficeNumber);
    dataArray.push(ManagerObj);
    menuPrompt()
  });
}
managerPrompt();



// ENGINEER PROMPT
const engineerPrompt = ()=>
{
  inquirer
  .prompt([
    {
        type: "input",
        name: "engineerId",
        message: "Enter engineer id:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
        type: "input",
        name: "engineerName",
        message: "Enter engineer name:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter engineer email:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "Enter gitHub username:",
      validate: function(input)
      {
          if(input == "")
          {
            return false;
          }
        return true;

      }
  },
  ])

  .then((answers) => {
    let engineerObj = new Engineer(answers.engineerId, answers.engineerName, answers.engineerEmail, answers.engineerGitHub);
    dataArray.push(engineerObj);
    menuPrompt();
  });
}



// INTERN PROMPT
const internPrompt = ()=>
{
  inquirer
  .prompt([
    {
        type: "input",
        name: "internId",
        message: "Enter intern id:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
        type: "input",
        name: "internName",
        message: "Enter intern name:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter intern email:",
        validate: function(input)
        {
            if(input == "")
            {
              return false;
            }
          return true;

        }
    },
    {
      type: "input",
      name: "internSchool",
      message: "Enter intern school:",
      validate: function(input)
      {
          if(input == "")
          {
            return false;
          }
        return true;

      }
  },
  ])

  .then((answers) => {
    let internObj = new Intern(answers.internId, answers.internName, answers.internEmail, answers.internSchool);
    dataArray.push(internObj);
    menuPrompt();
  });
}



// Build HTML
const bulidHTML = ()=>
{
  fs.writeFile("dist/index.html", CreateHTML(dataArray), (err)=>{
    console.log("File Create Successfully!");
  });
}




// MENU
const menuPrompt = ()=>
{
    inquirer
  .prompt([
    {
        type: "list",
        name: "menu",
        choices: ["Engineer", "Intern", "Build"],
    }
  ])
  .then((answers) => {
    switch(answers.menu)
    {
      case "Engineer":
        engineerPrompt();
        break;

      case "Intern":
        internPrompt();
        break;

        case "Build":
          bulidHTML();
          break;
    }
  });
}