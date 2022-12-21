//
generateCard = (employeeInfo) => {    
    let employeesHtml = ''
    for (let i = 0; i < employeeInfo.length; i++) {

      const htmlGenName = `
      <div class = "text-center"><h2>${employeeInfo[i].getName()}</h2></div>`
      employeesHtml += htmlGenName
      
      const htmlGenRole = `
      <div class = "text-center"><h3>Role: ${employeeInfo[i].getRole()}</h3></div>`
      employeesHtml += htmlGenRole
      
      const htmlGenId = `
      <div class = "text-center"><p>Employee Id: ${employeeInfo[i].getId()}</p></div>`
      employeesHtml += htmlGenId

      const htmlGenEmail = `
      <div class = "text-center"><a href="mailto:${employeeInfo[i].getEmail()}">Email: ${employeeInfo[i].email}</a></div>`
      employeesHtml += htmlGenEmail

      if (employeeInfo[i].officeNumber !== undefined) {
        const htmlGenOfficeNum = `
        <div class = "text-center"><p>Office #: ${employeeInfo[i].officeNumber}</p> </div>`
        employeesHtml += htmlGenOfficeNum

    } else if (employeeInfo[i].github !== undefined) {
        const htmlGenGithub = `
        <div class = "text-center"><a href = "https://github.com/${employeeInfo[i].getGithub()}" target = "_blank" rel="noopener noreferrer">GitHub profile: ${employeeInfo[i].getGithub()}</a> </div>`
        employeesHtml += htmlGenGithub

    } else if (employeeInfo[i].school !== undefined) {
        const htmlGenSchool = `
        <div class = "text-center" ><p>School: ${employeeInfo[i].getSchool()}</p></div>`
        employeesHtml += htmlGenSchool
    }
    }
    return employeesHtml 
}
// Generates HTML template with employee info
generateHtml = (employeeInfo) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>
        <div>
    ${generateCard(employeeInfo)}
        </div>
    </body>
    </html>`
}

module.exports = {generateCard, generateHtml};