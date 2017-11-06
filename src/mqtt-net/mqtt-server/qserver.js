var MShepherd = require('mqtt-shepherd');
var qserver = new MShepherd();

qserver.on('ready', function () {
    console.log('My MQTT machine server is now ready.');

    qserver.permitJoin(180);
});

qserver.on('ind', function (msg) {
    var qnode = msg.qnode;

    switch (msg.type) {
        case 'devIncoming':
            var srcPath;

            if (qnode.clientId === 'my_client_id_qnode001') {
                srcPath = 'temperature/0/sensorValue';
                qnode.writeAttrsReq(srcPath, { pmin: 10, pmax: 600, stp: 0.1 }, function (err, rsp) {
                    qnode.observeReq(srcPath, function (err, rsp) {
                        console.log('# Observe response from qnode1: ');
                        console.log(rsp);
                    });
                });

            } else if (qnode.clientId === 'my_client_id_qnode002') {
                srcPath = 'lightCtrl/0/onOff';

                qnode.writeAttrsReq(srcPath, { pmin: 10, pmax: 600, stp: 0.5 }, function () {
                    qnode.observeReq(srcPath, function (err, rsp) {
                        console.log('# Observe response from qnode2: ');
                        console.log(rsp);
                    });
                });
            }
            break;
        case 'devNotify':
            console.log('Resource changed on: ' + qnode.clientId);
            console.log(msg.data);
            break;
        default:
            console.log('Other message: ' + msg.type);
    }
});

qserver.start(function (err) {
    if (err)
        console.log(err);
});
