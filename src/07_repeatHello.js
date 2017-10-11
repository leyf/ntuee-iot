function hello() {
    console.log('Hello World!');
}

function repeatHello(times, callback) {
    for (var i = 0; i < times; i++) {
        console.log(i + ':');
        callback();
    }
}

repeatHello(10, hello);
