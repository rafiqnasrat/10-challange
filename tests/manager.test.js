const Manager = require("./../lib/manager");
const Manag = new Manager("1", "Rafiqullah", "Rafiqullahnasrat3@gmail.com", "5");

test("This is check for manager class", ()=>{
    expect(Manag.id).toBe("1");
    expect(Manag.name).toBe("Rafiqullah");
    expect(Manag.email).toBe("Rafiqullahnasrat3@gmail.com");
    expect(Manag.officeNumber).toBe("5");
});

test("This check is for getId() method", ()=>{
    expect(Manag.getId()).toBe("1");
});

test("This check is for getName() method", ()=>{
    expect(Manag.getName()).toBe("Rafiqullah");
});

test("This check is for getEmail() method", ()=>{
    expect(Manag.getEmail()).toBe("Rafiqullahnasrat3@gmail.com");
});

test("This check is for getEmail() method", ()=>{
    expect(Manag.getRoll()).toBe("Manager");
});