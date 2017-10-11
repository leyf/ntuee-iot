var person = {
    name: 'John',
    gender: 'man',
    age: 20,
    speak: function (text) {
        console.log(text);
    },
    hello: function () {
        console.log("Hello, I am " + this.name + ".");
    }
};

person.speak('Hi Hi~');
person.hello();