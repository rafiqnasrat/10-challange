const Interns = require("./../lib/intern");
const Int = new Interns("1", "Rafiqullah", "Rafiqullahnasrat3@gmail.com", "Bootcamp");

test("This is check for interns class", ()=>{
    expect(Int.id).toBe("1");
    expect(Int.name).toBe("Rafiqullah");
    expect(Int.email).toBe("Rafiqullahnasrat3@gmail.com");
    expect(Int.school).toBe("Bootcamp");
});

test("This check is for getId() method", ()=>{
    expect(Int.getId()).toBe("1");
});

test("This check is for getName() method", ()=>{
    expect(Int.getName()).toBe("Rafiqullah");
});

test("This check is for getEmail() method", ()=>{
    expect(Int.getEmail()).toBe("Rafiqullahnasrat3@gmail.com");
});


test("This check is for getEmail() method", ()=>{
    expect(Int.getRoll()).toBe("Intern");
});