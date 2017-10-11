function hello() {
    console.log('Hello World!');
}

function delayHello(delayMs, callback) {
    setTimeout(function () {
        callback();
    }, delayMs);

}

delayHello(2000, hello);
