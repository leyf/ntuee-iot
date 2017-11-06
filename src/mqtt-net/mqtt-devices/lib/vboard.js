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
// virtual signal on bus foo
function fooBusAlive() {
    var minTime = 1000,     // ms
        maxTime = 10000,
        minTemp = 20,       // Cel
        maxTemp = 28;

    var randomMs = Math.floor(Math.random() * (maxTime - minTime) + minTime),
        randomTemp = Math.random() * (maxTemp - minTemp) + minTemp;

    randomTemp = Math.round(randomTemp*100)/100;    // ex. 26.43

    setTimeout(function () {
        vboard.bus.foo.value = randomTemp;          // update the foo bus value
        fooBusAlive();
    }, randomMs);
}

fooBusAlive();  // start
/***************************/

vboard.fooBus = {
    read: function (callback) {
        setImmediate(function () {
            callback(null, vboard.bus.foo.value);
        });
    },
    write: function (val, callback) {
        setImmediate(function () {
            callback(new Error('Illegal operation: Value cannot be written.'));
        });
    }
};

vboard.gpio = {
    read: function (pin, callback) {
        setImmediate(function () {
            callback(null, vboard.pin[8].value);
        });
    },
    write: function (pinNum, val, callback) {
        if (pinNum !== 8) {
            setImmediate(function () {
                callback(new Error("Gpio only accepts pin #8"));
            });
        } else {
            setImmediate(function () {
                vboard.pin[pinNum].value = val;
                callback(null, vboard.pin[pinNum].value);
            });
        }
    }
};

module.exports = vboard;
