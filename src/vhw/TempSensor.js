function TempSensor() {
    this.value = null;
    this.unit = 'C';
}

TempSensor.prototype.read = function (callback) {

};

TempSensor.prototype.write = function (callback) {
    callback(new Error('Cannot be written.'));
};

module.exports = TempSensor;
