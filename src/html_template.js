  const generateTeam = (team) => {
    console.log("inside the generateTeam Function")
    console.log('team1', team);
    
   const generateManager = (managers) => {
    console.log('generate managers', managers);
    console.log('getname function', managers.getName());
        return `<div class="m-4 card text-white bg-primary align-items-center" style="max-width: 18rem;">
        <div class="card-header">
          <h3>${managers.getName()}</h3>
          <h4><i class="bi bi-cup-fill "></i> ${managers.getRole()}</h4>
        </div>
          <ul class="list-group list-group-flush text-body">
            <li class="list-group-item">ID: ${managers.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${managers.getEmail()}">${managers.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${managers.getOfficeNumber()}</li>
          </ul> 
      </div>`
      
    };

    const generateEngineer = (engineer) => {
      console.log('engineer', engineer);
        return `<div class="m-4 card text-white bg-primary align-items-center" style="max-width: 18rem;">
        <div class="card-header">
          <h3>${engineer.getName()}</h3>
          <h4><i class="bi bi-laptop "></i> ${engineer.getRole()}</h4>
        </div>
          <ul class="list-group list-group-flush text-body">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
          </ul> 
      </div>`
      
    };

    const generateIntern = (intern) => {
      console.log('intern', intern);
        return `<div class="m-4 card text-white bg-primary align-items-center" style="max-width: 18rem;">
        <div class="card-header">
          <h3>${intern.getName()}</h3>
          <h4><i class="bi bi-mortarboard-fill"></i> ${intern.getRole()}</h4>
        </div>
          <ul class="list-group list-group-flush text-body">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul> 
      </div>`
      
    };

    cards = [];

    cards.push(
    team.filter( (employee) => employee.getRole() == 'Manager')
    .map((manager) => generateManager(manager))
    .join(''));
    
    cards.push(
    team.filter( (employee) => employee.getRole() == 'Engineer')
    .map((engineer) => generateEngineer(engineer))
    .join(''));

    cards.push(
    team.filter( (employee) => employee.getRole() == 'Intern')
    .map((intern) => generateIntern(intern))
    .join(''))
   
    return cards.join('');
   
  };



module.exports = (team) => {
  console.log("team: ", team );
  // generateTeam(team);

return `<!DOCTYPE html>
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
    <div class="align-items-center justify-content-center row">
     ${generateTeam(team)}
    <div>
   </main>  
 </body>
 </html>`
}
console.log("inside the html_template file");

// module.exports = generateHtml;
