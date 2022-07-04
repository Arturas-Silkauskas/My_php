//object literal
//masyvas kaip pvz
let userArr = [
    'Arturas', // Name
    'Kaunas', // City
    28 // Age
];
console.log(userArr[1]);

let userObj = {
    name: 'Arturas',
    city: 'Kaunas',
    age: 28,
    sayName: function() {
        return this.name;
    }
};
console.log(userObj.name);
console.log(userObj.sayName());

class UserUsingClass {
    constructor(name, city, age) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let userClass = new UserUsingClass('Arturas','Kaunas',28);
console.log(userClass.name, userClass.city, userClass.age);
console.log(typeof(userClass.name));
console.log(typeof(userClass.age));

let date = new Date();
let time = date.getFullYear();
console.log(time);