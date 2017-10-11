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

var p = new Person('John', 'man', 20);

console.log(p);
p.speak('Hi Hi~~');
p.hello();