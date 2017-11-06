var MqttNode = require('mqtt-node'),
    SmartObject = require('smartobject'),
    vboard = require('./vboard');

var qnode2,
    soLight = new SmartObject({ ledPinNum: 8 });

soLight.init('lightCtrl', 0, {
    onOff: {
        read: function (cb) {
            var hal = this.parent.hal;
            return vboard.gpio.read(hal.ledPinNum, cb);
        },
        write: function (value, cb) {
            var hal = this.parent.hal;
            return vboard.gpio.write(hal.ledPinNum, value, cb);
        }
    }
});

qnode2 = new MqttNode('my_client_id_qnode002', soLight);

qnode2.on('registered', function () {
    console.log('# qnode2 registered to the network.');
});

qnode2.on('login', function () {
    console.log('# qnode2 logged into the network.');
});

qnode2.on('logout', function () {
    console.log('# qnode2 logged out from the network.');
});

qnode2.on('offline', function () {
    console.log('# qnode2 is offline.');
});

module.exports = qnode2;
