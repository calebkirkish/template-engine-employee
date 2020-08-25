module.exports = {

    manager: [
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'What is your office number?'
        }
    ],
    intern: [
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What university do you attend?'
        }
    ],
    engineer: [
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'What is your GitHub username?'
        }
    ],
    employee: [
        {
            type: 'list',
            name: 'typeOfEmployee',
            message: 'Would you like to add an engineer, an intern, or complete the team build',
            choices:['Engineer', 'Intern', 'Complete team'],
            default: 'Complete team'
        }
    ]
};