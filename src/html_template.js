const generateManager = (manager) => {
  if (manager) {
    return 
    `<div class="card text-white bg-primary" style="max-width: 18rem;">
    <div class="card-header">
      <h3>Jared</h3>
      <h4><i class="bi bi-cup-fill"></i>${manager.name}</h4>
    </div>
      <ul class="list-group list-group-flush text-body">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul> 
  </div>`
  }
};

const generateEngineer = (engineer) => {
  if (engineer) {
    return
    `<div class="card text-white bg-primary" style="max-width: 18rem;">
    <div class="card-header">
      <h3>Jared</h3>
      <h4><i class="bi bi-sunglasses"></i>${engineer.name}</h4>
    </div>
      <ul class="list-group list-group-flush text-body">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">Github: ${engineer.github}</li>
      </ul> 
  </div>`
  }
};

const generateIntern = (intern) => {
  if (intern) {
    return
    `<div class="card text-white bg-primary" style="max-width: 18rem;">
    <div class="card-header">
      <h3>Jared</h3>
      <h4><i class="bi bi-sunglasses"></i>${intern.name}</h4>
    </div>
      <ul class="list-group list-group-flush text-body">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item">Github: ${intern.school}</li>
      </ul> 
  </div>`
  }
};





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
    <div class="card text-white bg-primary" style="max-width: 18rem;">
      <div class="card-header">
        <h3>Jared</h3>
        <h4><i class="bi bi-cup-fill"></i>Manager</h4>
      </div>
        <ul class="list-group list-group-flush text-body">
          <li class="list-group-item">ID: </li>
          <li class="list-group-item">Email: </li>
          <li class="list-group-item">Github: </li>
        </ul> 
    </div>
  </main>  
</body>
</html>`


module.exports = { generateManager, generateEngineer, generateIntern}