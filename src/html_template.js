  const generateTeam = (team) => {

    
   const generateManager = (managers) => {

        return 
        `<div class="card text-white bg-primary" style="max-width: 18rem;">
        <div class="card-header">
          <h3>${managers.getName()}</h3>
          <h4><i class="bi bi-cup-fill"></i>${managers.getRole()}</h4>
        </div>
          <ul class="list-group list-group-flush text-body">
            <li class="list-group-item">ID: ${managers.getId()}</li>
            <li class="list-group-item">Email: ${managers.getEmail()}</li>
            <li class="list-group-item">Office Number: ${managers.getOfficeNumber()}</li>
          </ul> 
      </div> ${console.log('manager')}`
      
    };

    const generateEngineer = (engineer) => {
    
        return
        `<div class="card text-white bg-primary" style="max-width: 18rem;">
        <div class="card-header">
          <h3>${engineer.getName()}</h3>
          <h4><i class="bi bi-sunglasses"></i>${engineer.getRole()}</h4>
        </div>
          <ul class="list-group list-group-flush text-body">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">Github: ${engineer.getGithub()}</li>
          </ul> 
      </div> ${console.log('engineer')}`
      
    };

    const generateIntern = (intern) => {

        return
        `<div class="card text-white bg-primary" style="max-width: 18rem;">
        <div class="card-header">
          <h3>${intern.getName()}</h3>
          <h4><i class="bi bi-sunglasses"></i>${intern.getRole()}</h4>
        </div>
          <ul class="list-group list-group-flush text-body">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">Github: ${intern.getSchool()}</li>
          </ul> 
      </div> ${console.log('intnern')}`
      
    };

    team.filter( (employee) => employee.getRole() == 'Manager')
    .map((manager) => generateManager(manager))

    team.filter( (employee) => employee.getRole() == 'Engineer')
    .map((engineer) => generateManager(engineer))
    
    team.filter( (employee) => employee.getRole() == 'Intern')
    .map((intern) => generateManager(intern))

    return console.log('yes');

   
  };



const generateHtml = (team) => {

  return
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profiles</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
</head>
<body>
  <header>
    <div class="jumbotron jumbotron-fluid bg-danger">
      <div class="container">
        <h1 class="display-4 text-light text-center">My Team</h1>
      </div>
    </div>
  </header>
  <main>
    ${generateTeam(team)}
  </main>  
</body>
</html>`
}

module.exports = generateHtml;
