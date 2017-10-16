var SmartObject = require('smartobject'),
    vboard = require('./vboard');

var so = new SmartObject();

so.init('temperature', 0, {
    sensorValue: {                  // < rid = 5700, R, Float >
        read: function (cb) {
            return vboard.fooBus.read(cb);
        }
    },
    units: 'C'                      // < rid = 5701, R, String >
});

so.init('lightCtrl', 0, {
    onOff: {                        // < rid = 5850, RW, Boolean { 0: off, 1: on } >
        read: function (cb) {
            return vboard.gpio.read(8, cb);
        },
        write: function (value, cb) {
            return vboard.gpio.write(8, value, cb);
        }
    }
});

module.exports = so;
