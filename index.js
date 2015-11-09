var util   = require('util');
var script = require('./script');

process.stdin.resume();
process.stdin.setEncoding('utf8');

// Used to get the next scenario
var result = function () { return 'start' };

// Used to store the player's last choice
var choice;

// Start!
clear();
log('  Press Enter to start.\n');

process.stdin.on('data', function (text) {
    choice = util.inspect(text)[1];

    clear();

    if (result) {
        var scene = script[result(choice)];
        if (scene) {
            log(scene.prompt);
            clear(scene.prompt.split('\n').length + 2);
            result = scene.result;
        } else {
            log('Script for', name, 'not found!');
            exit();
        }
    } else {
        exit();
    }
});

// Shorthand for console.log
function log() {
    console.log.apply(console, arguments);
}

// Clear the screen by printing out blank lines
function clear(less) {
    var lines = process.stdout.getWindowSize()[1];
    var n = [];
    var total = lines - (less || 0);
    for(var i = 0; i < total; i++) {
        n.push('\r\n');
    }
    console.log(n.join(''));
}

// Quit the program
function exit() {
    process.exit();
}