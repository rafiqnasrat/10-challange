const Empolyee = require("./empolyee");

class Intern extends Empolyee
{
    constructor(id, name, email, school){
        super(id, name, email);
        this.school = school;
    }

    getschool()
    {
        return this.school;
    }

    getRoll()
    {
        return "Intern"; 
    }
}

module.exports = Intern;