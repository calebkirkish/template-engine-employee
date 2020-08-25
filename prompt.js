module.exports = {

    manager: [
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter Manager name:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Manager ID:'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Manager email:'
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'Manager office number:'
        }
    ],
    intern: [
        {
            type: 'input',
            name: 'internName',
            message: 'Enter intern name:'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Enter intern ID:'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter intern email:'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Enter university intern attending:'
        }
    ],
    engineer: [
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter engineer name:'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter engineer ID:'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter engineer email:'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'Engineer GitHub username:'
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