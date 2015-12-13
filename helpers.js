"use strict";
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
exports.rl = rl;

var get = function(val) {
  rl.setPrompt("Your Choice (Q for quit game) >");
  rl.prompt();
};
exports.get = get;

var CHOICES = ["Rock", "Spock", "Paper", "Lizard", "Scissors"];
exports.CHOICES = CHOICES;

