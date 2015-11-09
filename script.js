var script = {};
var choices = {};

script.start = {
    prompt: 'You are walking through the woods. You come upon a cabin. What do you do?\n\n  1) Go inside\n  2) Knock\n\n',
    result: choice => {
        choices.wentInside = (choice !== '2');
        if (choices.wentInside) {
            return 'inside';
        } else {
            return 'knock';
        }
    }
};

script.knock = {
    prompt: "You knock on the door, but no one answers.\nYou decide to go inside.\n\n  (Press Enter to continue)\n\n",
    result: () => {
        return 'inside';
    }
};

script.inside = {
    prompt: "You enter the cabin, cautiously. There doesn't seem to be anyone inside.\n" +
    "There is a table, with three chairs and three bowls.\n\n  1) Go to table\n  2) Go upstairs\n\n",
    result: choice => {
        if (choice == '2') {
            return 'upstairs';
        } else {
            return 'table';
        }
    }
};

script.table = {
    prompt: "You go to the table. Each of the bowls has porridge in it.\nOne is very large, another is regular-sized, " +
    "and a third is small.\n\n  1) Sample the porridges\n  2) Go upstairs\n\n",
    result: choice => {
        choices.seenTable = true;
        if (choice == '2') {
            return 'upstairs';
        } else {
            return 'sample';
        }
    }
};

script.sample = {
    prompt: "You taste the porridges, starting with the largest. It's too hot!\nYou try the regular-sized one. " +
             "It's too cold!\nYou try the third. It's just right! You decide to eat it all up.\n\nAfter you're done, you " +
             "decide to go upstairs.\n\n  (Press Enter to continue)\n\n",
    result: () => {
        choices.atePorridge = true;
        return 'upstairs';
    }
};

script.upstairs = {
    prompt: () => {
        return "You get to the top of the stairs and see a room.\nYou go inside and see three beds" +
            (choices.seenTable ? ' -- just like the bowls!' : '.') + "\n\n" + (choices.atePorridge ? 'All that ' +
            'porridge' : 'Walking up the stairs') + " made you really tired. You decide to lie down.\n\nYou try the " +
            "large bed first. It's too hard!\nYou try the regular-sized one. It's too soft!\nYou try the small one. " +
            "It's just right.\n\nYou fall fast asleep.\n\n  (Press Enter to continue)\n\n";
    },
    result: () => 'arrival'
};

script.arrival = {
    prompt: "Downstairs, three bears arrive, back from a walk through the woods.\n\n  (Press Enter to continue)\n\n",
    result: function () {
        if (choices.atePorridge) {
            return 'chased';
        } else {
            return 'friends';
        }
    }
};

script.chased = {
    prompt: '"Hey", says Papa bear. "Somebody ate my porridge!"\n' +
             '"That\'s strange," says Mama bear. "Somebody ate my porridge, too!"\n' +
             '"Oh no!" Baby bear cried, "Somebody ate all of my porridge!"\n\n' +
             "The bears rush upstairs and find you sleeping in Baby bear's bed.\n" +
             "They growl in unison, startling you and waking you up." +
             "\n\n  1) Try to explain\n  2) Run for your life\n\n",
    result: choice => {
        if (choice == '2') {
            return 'run';
        } else {
            return 'explain';
        }
    }
};

script.explain = {
    prompt: "You try to explain, but the bears don't understand English.\nThey growl at you and give chase.\n\n  (Press Enter to continue)\n\n",
    result: () => 'run'
};

script.run = {
    prompt: "You run for your life, barely escaping alive.\n\nYou've learned your lesson and vow never to eat bear food again." +
            "\n\nThe End!\n\n  (Press Enter to exit)\n\n\n"
};

script.friends = {
    prompt: "The bears see you sleeping and are surprised, but not angry. They've had their lunch and are now rather docile.\n" +
            "Papa and Mama bear get in their beds and fall asleep.\nBaby bear gets in his bed and cuddles up next to you.\n\n" +
            "  (Press Enter to continue)\n\n",
    result: () => 'wake'
};

script.wake = {
    prompt: "Hours later, when you all wake, you explain that you were lost in the woods.\n" +
    "The bears smile, and explain that the highway is right behind their house. You're only feet away from town.\n\n" +
    "You say your goodbyes and promise to stay in touch.\n\nThe end!\n\n  (Press Enter to exit)\n\n"
};

module.exports = script;