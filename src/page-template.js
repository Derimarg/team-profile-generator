const Employee = require("../lib/Employee");

// function that will create cards
const createTeamCard = team => {

    // manager section
    const renderManager = manager => {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h4 class="card-title"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h4>
    </div>

    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
        </ul>
    </div>
</div>`;
    }

    // engineer section
    const renderEngineer = engineer => {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h4 class="card-title"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h4>
    </div>

    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>`;
    };

    // inter section
    const renderIntern = intern => {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h4 class="card-title"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`;
    };

    const saveRole = [];

    saveRole.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => renderManager(manager)));

    saveRole.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => renderEngineer(engineer)).join(''));

    saveRole.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => renderIntern(intern)).join(''));

    return saveRole.join('');
}

// Display HTML team profiles
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron text-white mb-3">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="main-section col-12 d-flex justify-content-center">
                ${createTeamCard(team)}
            </div>
        </div>
    </div>
</body>

</html>`;
};