var script = {};
var choices = {};

script.intro = {
	prompt: "You're teaching a class on Node.js.\nWhat do you want to teach?\n\n" +
			"  1) Text Adventure!\n  2) GIS and Mapping\n\n",
	result: function(choice) {
		if (choice === '1') {
			choices.ltc = 'textAdventure';
			return 'textAdventure';
		} else if (choice === '2') {
			choices.ltc = 'GIS';
			return 'GIS';
		} else {
			return 'intro'
		}
	}
}

script.textAdventure = {
	prompt: "You're teaching a Text Adventure class! Great!\n\n  (Press Enter to continue)\n\n",
	result: function() {
		return 'afterClass';
	}
}

script.GIS = {
	prompt: "You're teaching a GIS class! Sweet!\n\n  (Press Enter to continue)\n\n",
	result: function() {
		return 'afterClass';
	}
}

script.afterClass = {
	prompt: function() {
		var p = "You class went great! "
		if (choices.ltc === 'textAdventure') {
			return p + "Everybody was excited to make a text adventure!\n\n (Press Enter to exit)";
		} else {
			return p + "People really love GIS!";
		}
	}
}

module.exports = script;

