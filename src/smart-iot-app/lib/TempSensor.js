var mySo = require('./smart-obj');

function TempSensor(id) {
    this.id = id;
}

TempSensor.prototype.read = function (cb) {
    return mySo.read('temperature', this.id, 'sensorValue', cb);
};

module.exports = TempSensor;
