const Empolyee = require("./empolyee");

class Engineer extends Empolyee
{
    constructor(id, name, email, gitUserName)
    {
        super(id, name, email);
        this.gitUserName = gitUserName;
    }

    getgitUserName()
    {
        return this.gitUserName;
    }

    getRoll(){
        return "Engineer";
    } 
}

module.exports = Engineer;