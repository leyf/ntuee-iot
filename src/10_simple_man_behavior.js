var person = {
    name: 'John',
    gender: 'man',
    age: 20,
    speak: function (text) {
        console.log(text);
    },
    hello: function () {
        var text = "Hello, I am " + this.name + ".";
        console.log(text);
        this.speak(text);
        //console.log("Hello, I am " + this.name + ".");
    }
};

person.speak('Hi Hi~');
person.hello();