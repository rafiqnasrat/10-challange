const Empolyee = require("./empolyee");

class Manager extends Empolyee{
    constructor(id, name, email, officeNumber)
    {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber()
    {
        return this.officeNumber;
    }

    getRoll()
    {
        return "Manager";
    } 
}

module.exports = Manager;