var TempSensor = require('./lib/TempSensor');

var mySensor0 = new TempSensor(0);

// poll the sensor
setInterval(function () {
    mySensor0.read(function (err, value) {
        console.log('Sensor value: ' + value + ' C');
    });
}, 3000);

