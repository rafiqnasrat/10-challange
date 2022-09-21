const Empolyee = require("./../lib/empolyee");
const Emp = new Empolyee("1", "Rafiqullah", "Rafiqullahnasrat3@gmail.com");


test("This is test, to check empoly class", ()=>{
    expect(Emp.id).toBe("1");
    expect(Emp.name).toBe("Rafiqullah");
    expect(Emp.email).toBe("Rafiqullahnasrat3@gmail.com"); 
});

test("This check is for getId() method", ()=>{
    expect(Emp.getId()).toBe("1");
});

test("This check is for getName() method", ()=>{
    expect(Emp.getName()).toBe("Rafiqullah");
});

test("This check is for getEmail() method", ()=>{
    expect(Emp.getEmail()).toBe("Rafiqullahnasrat3@gmail.com");
});


test("This check is for getRoll() method", ()=>{
    expect(Emp.getRoll()).toBe("Empolyee");
});