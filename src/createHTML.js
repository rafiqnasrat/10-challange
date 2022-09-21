 let CreateHTML = (dataArray)=>
{
    let HTMLElements = [];

    let generateManager = manager => {
        let managerHtml = `
            <article class="col-md-3">

            <div class="cus-card">
                <div class="cus-card-header">
                    <h4>${manager.name}</h4>
                    <p><i class="fa-solid fa-mug-hot me-2"></i>Manager</p>
                </div>
                <div class="cus-card-body">
                    <div>
                        <p>ID: ${manager.id}</p>
                        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p>Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>

        </article>
        `;

        HTMLElements.push(managerHtml);
    }



    let generateEngineer = engineer => {
        let engineerHtml = `
            <article class="col-md-3">

            <div class="cus-card">
                <div class="cus-card-header">
                    <h4>${engineer.name}</h4>
                    <p><i class="fa-solid fa-glasses me-2"></i>Engineer</p>
                </div>
                <div class="cus-card-body">
                    <div>
                        <p>ID: ${engineer.id}</p>
                        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p>GitHub: <a target="_blank" href="https://github.com/${engineer.gitUserName}">GitHub Account</a></p>
                    </div>
                </div>
            </div>

        </article>
        `;

        HTMLElements.push(engineerHtml);
    }




    let generateIntern = intern => {
        let internHtml = `
                <article class="col-md-3">

                <div class="cus-card">
                    <div class="cus-card-header">
                        <h4>${intern.name}</h4>
                        <p><i class="fa-solid fa-user-graduate me-2"></i>Intern</p>
                    </div>
                    <div class="cus-card-body">
                        <div>
                            <p>ID: ${intern.id}</p>
                            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p>School: ${intern.school}</p>
                        </div>
                    </div>
                </div>

            </article>
        `;
        HTMLElements.push(internHtml);
    }


    for(i=0; i<dataArray.length; i++)
    {
        if(dataArray[i].getRoll() == "Manager") {generateManager(dataArray[i])};
        if(dataArray[i].getRoll() == "Engineer") {generateEngineer(dataArray[i])};
        if(dataArray[i].getRoll() == "Intern") {generateIntern(dataArray[i])};
    }


    return  `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <!-- BOOTSTRAP -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        
            <!-- CUSTOM STYLE -->
            <link rel="stylesheet" href="style.css">
        
            <!-- FONTAWESOME -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
            <title>My Team</title>
        </head>
        <body>
            <main class="container">
                <h3>My Team</h3>
                <section class="row mt-3">

                ${HTMLElements.join("")}

            </section>
            </main>
    </body>
    </html>
    `;
    

}

module.exports = CreateHTML;