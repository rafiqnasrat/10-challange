class Empolyee
{
    constructor(id, name, email)
    {
        this.id = id;
        this.name = name;
        this.email = email; 
    }
    
    getId()
    {
        return this.id;
    }
    getName()
    {
        return this.name;
    }
    getEmail()
    {
        return this.email;
    }
    getRoll()
    {
        return "Empolyee";
    }
}

module.exports = Empolyee;