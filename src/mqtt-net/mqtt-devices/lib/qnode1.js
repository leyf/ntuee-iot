var MqttNode = require('mqtt-node'),
    SmartObject = require('smartobject'),
    vboard = require('./vboard');

var qnode1,
    soTemp = new SmartObject();

soTemp.init('temperature', 0, {
    sensorValue: {
        read: function (cb) {
            return vboard.fooBus.read(cb);
        }
    },
    units: 'C'
});

qnode1 = new MqttNode('my_client_id_qnode001', soTemp);

qnode1.on('registered', function () {
    console.log('# qnode1 registered to the network.');
});

qnode1.on('login', function () {
    console.log('# qnode1 logged into the network.');
});

qnode1.on('logout', function () {
    console.log('# qnode1 logged out from the network.');
});

qnode1.on('offline', function () {
    console.log('# qnode1 is offline.');
});

module.exports = qnode1;
