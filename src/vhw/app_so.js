var SmartObject = require('smartobject'),
    vboard = require('./vboard');

var so = new SmartObject({ ledPinNum: 8 });

so.init('temperature', 0, {
    sensorValue: {                  // < rid = 5700, R, Float >
        read: function (cb) {
            return vboard.gpio.read(ledPinNum, callback);
        }
    },
    units: 'C'                      // < rid = 5701, R, String >
});

so.init('lightCtrl', 0, {
    onOff: {                        // < rid = 5850, RW, Boolean { 0: off, 1: on } >
        read: function (cb) {
            var hal = this.parent.hal;
            return vboard.gpio.read(hal.ledPinNum, callback);
        },
        write: function (value, cb) {
            var hal = this.parent.hal;
            return vboard.gpio.write(hal.ledPinNum, value, callback);
        }
    }
});

// toggle the LED
setInterval(function () {
    led.read(function (err, onOff) {
        led.write(onOff ? 0 : 1, function (err, status) {
            console.log('LED Status: ' + (status ? 'ON' : 'OFF'));
        });
    });
}, 3000);

// poll the sensor
setInterval(function () {
    tempSensor.read(function (err, value) {
        console.log('Sensor value: ' + value + ' C');
    });
}, 3000);