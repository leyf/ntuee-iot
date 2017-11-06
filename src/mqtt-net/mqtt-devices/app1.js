var qnode1 = require('./lib/qnode1');

qnode1.once('ready', function () {
    console.log('# qnode1 is ready.')
    console.log('# start a small app on machine: print temp value every 5 secs.')

    setInterval(function () {
        var soTemp = qnode1.getSmartObject();

        soTemp.read('temperature', 0, 'sensorValue', function (err, data) {
            if (!err)
                console.log(data);
            else
                console.log(err);
        });
    }, 5000);
});


qnode1.connect('mqtt://localhost');
