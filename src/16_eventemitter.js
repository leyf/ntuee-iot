var util = require('util');
var EventEmitter = require('events');

function SevenPupu() {

}

util.inherits(SevenPupu, EventEmitter);

var spupu = new SevenPupu();

spupu.on('show_me_the_world', function() {
    console.log('ON: Hello World!');
});

spupu.once('show_me_the_world', function() {
    console.log('ONCE: Hello World!');
});

setInterval(function () {
    spupu.emit('show_me_the_world');
}, 3000);
