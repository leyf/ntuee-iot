function Light() {
    this.value = null;
}

Light.prototype.read = function (callback) {

};

Light.prototype.write = function (callback) {
    callback(new Error('Cannot be written.'));
};

module.exports = Light;
