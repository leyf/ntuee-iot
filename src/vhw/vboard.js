var vboard = {
    pin: {
        "8": {
            dir: 'out',
            value: 0    // 0: Low, 1: High
        }
    },
    bus: {
        "foo": {
            value: 25
        }
    }
};

/***************************/


/***************************/

vboard.fooBus = {
    read: function (callback) {},
    write: function (val, callback) {}
};

vboard.gpio = {
    read: function (pin, callback) {},
    write: function (pin, val, callback) {}
};

module.exports = vboard;
