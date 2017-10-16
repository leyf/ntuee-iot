var vboard = require('./vboard');

var tempSensor = vboard.fooBus,
    ledPinNum = 8,
    led = {
        read: function (callback) {
            return vboard.gpio.read(ledPinNum, callback);
        },
        write: function (onOff, callback) {
            return vboard.gpio.write(ledPinNum, onOff, callback);
        }
    };

// toggle the LED
setInterval(function () {
    led.read(function (err, onOff) {
        led.write(onOff ? 0 : 1, function (err, status) {
            console.log('LED Status: ' + (status ? 'ON' : 'OFF'));
        });
    });
}, 2000);

// poll the sensor
setInterval(function () {
    tempSensor.read(function (err, value) {
        console.log('Sensor value: ' + value + ' C');
    });
}, 3000);