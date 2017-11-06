var qnode2 = require('./lib/qnode2');

qnode2.once('ready', function () {
    console.log('# qnode2 is ready.');
});

qnode2.connect('mqtt://localhost');
