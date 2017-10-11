function Student(name, gender, age, school, dep) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.school = school;
    this.dep = dep;
}

Student.prototype.speak = function (text) {
    console.log(text);
};
Student.prototype.hello = function () {
    console.log("Hello, I am " + this.name + ".");
};

Student.prototype.greet = function () {
    console.log("Hello, I am " + this.name + ", a student from " + this.school + ' ' + this.dep);    
};

var s = new Student('John', 'man', 20, 'NTU', 'EE');

console.log(s);
s.speak('Hi Hi~~');
s.hello();
s.greet();