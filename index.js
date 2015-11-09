var readline = require('readline');
var script = require('./script');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

run('start');

function run(name) {
    clear();
    var scene = script[name];
    if (scene) {
        var prompt = typeof scene.prompt === 'function' ? scene.prompt() : scene.prompt;

        rl.question(prompt, function (choice) {
            if (scene.result) {
                var next = scene.result(choice);
                run(next);
            } else {
                exit();
            }
        });
    } else {
        log('Script for', name, 'not found!');
        exit();
    }
}

// Shorthand for console.log
function log() {
    console.log.apply(console, arguments);
}

// Clear the screen by printing out blank lines
function clear() {
    process.stdout.write('\033c');
}

// Quit the program
function exit() {
    clear();
    rl.close();
    //process.exit();
}