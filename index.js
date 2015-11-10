var chalk    = require('chalk');
var readline = require('readline');
var script   = require('./script');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

run('intro');

function run(name) {

	clearConsole();

	var scene = script[name];
	
	var prompt;
	if (typeof scene.prompt === 'function') {
		prompt = scene.prompt();
	} else {
		prompt = scene.prompt;
	}

	rl.question(prompt, function(choice) {
		if (scene.result) {
			var nextScene = scene.result(choice);
			run(nextScene);
		} else {
			clearConsole();
			rl.close();
		}
	});
}

function clearConsole() {
	process.stdout.write('\033c');	
}