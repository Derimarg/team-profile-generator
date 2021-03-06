const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/page-template.js');
const teamArr = [];
const idArr = [];


// Start application
function startTeam() {
    console.log(`
==============================================
======= START TO CREATE A TEAM PROFILE =======
==============================================

`);

    // Prompt user to create a manager when application starts
    function addManager() {
        console.log(`>>>>>>> MANAGER INFORMATION SECTION >>>>>>>
        
        `);
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Provide manager name: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return 'Please enter manager name!';
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Provide manager ID: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return 'Please enter manager ID!';
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Provide manager Email: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return 'Please enter manager email!';
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: `Provide manager's office number? (Required format: 111111111)`,
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return `Please enter manager's phone number!`;
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            menu();
        });
    }

    // menu list section
    function menu() {
        console.log(`
    >>>>>>> MENU OF TEAM >>>>>>>
        
        `);
        inquirer.prompt([
            {
                type: 'list',
                name: 'categoriesList',
                message: 'Select a category of member:',
                choices: ['Engineer', 'Intern', 'End application']
            }
        ]).then(categories => {
            switch (categories.categoriesList) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    generateFiles();
            }
        });
    }

    // engineer section
    function addEngineer() {
        console.log(`
        
    >>>>>>> ENGINEER INFORMATION SECTION >>>>>>>
    
    `);
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Provide Engineer name: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return `Please enter Engineer's name!`;
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Provide Engineer ID: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return `Please enter Engineer's ID.`;
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Provide Engineer email: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return `Please enter engineer's email!`;
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Provide engineer GitHub username: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return `Please enter Engineer's GitHub username!`;
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            menu();
        });
    }

    // intern section
    function addIntern() {
        console.log(`
    >>>>>>> INTERN INFORMATION SECTION >>>>>>>
        
    `);
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Provide Intern name: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return 'Please enter Intern name!';
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: `Provide Intern's ID`,
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return `Please enter Intern's ID!`;
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Provide Inter email: (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return `Please enter Intern's email address!`;
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: `Provide Intern's school: (Required)`,
                validate: answer => {
                    if (answer) {
                        return true;
                    }
                    return `Please enter Intern's school!`;
                }
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            idArr.push(answers.internId);
            menu();
        });
    }

    // Generate files section
    function generateFiles() {
        console.log(`
        
Generating Team Profile, please wait....`);

        const timer = setTimeout(() => {
            // Create dist folder
            if (!fs.existsSync(DIST_DIR)) {
                fs.mkdirSync(DIST_DIR)
            }
            // create html file
            fs.writeFileSync(outputPath, render(teamArr), 'utf-8');

            // create copy of style file
            fs.copyFile('./assets/css/style.css', './dist/style.css', err => {
                if (err) {
                    reject(err);
                    return;
                }
            });

            console.log(`
================================================================
======= Creation of team profile successfully completed! =======
=======                                                  =======
======= Follow directory: ./dist                         =======
================================================================

`);
        }, 3000);
    }

    addManager();
}

startTeam();