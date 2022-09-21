const Engineer = require("./../lib/engineer");
const Eng = new Engineer("1", "Rafiqullah", "Rafiqullahnasrat3@gmail.com", "rafiqnasrat");

test("This is check for engineer class", ()=>{
    expect(Eng.id).toBe("1");
    expect(Eng.name).toBe("Rafiqullah");
    expect(Eng.email).toBe("Rafiqullahnasrat3@gmail.com");
    expect(Eng.gitUserName).toBe("rafiqnasrat");
});

test("This check is for getId() method", ()=>{
    expect(Eng.getId()).toBe("1");
});

test("This check is for getName() method", ()=>{
    expect(Eng.getName()).toBe("Rafiqullah");
});

test("This check is for getEmail() method", ()=>{
    expect(Eng.getEmail()).toBe("Rafiqullahnasrat3@gmail.com");
});


test("This check is for getRoll() method", ()=>{
    expect(Eng.getRoll()).toBe("Engineer");
});