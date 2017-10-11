// Class: Person
function Person(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Person.prototype.speak = function (text) {
    console.log(text);
};

Person.prototype.hello = function () {
    console.log("Hello, I am " + this.name + ".");
};

module.exports = Person;
