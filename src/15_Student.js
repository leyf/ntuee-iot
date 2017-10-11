var util = require('util');
var Person = require('./14_Person');

// Class: Student
function Student(name, gender, age, school, dep) {
    Person.call(this, name, gender, age);

    this.school = school;
    this.dep = dep;
}

util.inherits(Student, Person);

Student.prototype.greet = function () {
    console.log("Hello, I am " + this.name + ", a student from " + this.school + ' ' + this.dep);    
};

var s = new Student('John', 'man', 20, 'NTU', 'EE');

console.log(s);
s.speak('Hi Hi~~');
s.hello();
s.greet();