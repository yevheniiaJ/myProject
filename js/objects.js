
// створено 3 обʼєкти through {}
let car = {
    color: "black",
    type: "BMW",
    model: "700"
}

let person = {
    firstName: "Jack",
    lastName: "Doe",
    age: 33,
    hairColor: "black",
    eyecolor: "blue",
    gender: "female"

}

let account = {
    type: "Purchase",
    id: 311,
    unitaxId: 245616,
    state: "active"
}


// створено 3 обʼєкти through Object()
let user = new Object({
    firstName: "Anna",
    lastName: "Novicka",
    age: 35,
    gender: "male",
    state: "active"

})

let boy = new Object({
    firstName: "Peter",
    lastName: "Kovalsky",
    age: 40,
    eyeColor: "blue",
    hairColor: "black",

})
let girl = new Object({
    firstNam: "Janna",
    lastNa: "Onyshko",
    ageAge: 36,
    eyeColors: "brown",
    hairColors: "black",
    "very nice": true
})

let people = Object.create(boy); // створено  обʼєкт Object.create(інший_оʼєкт)
let peopleKeys = Object.keys(girl);
let children = { ...boy, ...girl };
let human = {
    gender: "female",
    type: "adults",
    status: "married",
    __proto__: girl // створено  обʼєкт через __proto__
}
boy.isAdmin = true;
// створено обʼєкт engineer, yнаслідувано engineer fom person
let engineer = {
    name: "Xavier",
    surname: "Cool",
    character: "weak",
    job: "Any",
    __proto__: person
}
// унаслідувано QA_engineer
let qaEngineer = {
    profession: "QA",
    progessionType: "Manual",
    experience: 6,
    __proto__: engineer
}
for (let key in qaEngineer) {
    console.log(`${key}: ${qaEngineer[key]}`) // виведено значення всіх 3-х обʼєктів

}

