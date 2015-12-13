"use strict";

var Bot = function(name) {
  if (name == null)
    this.name = "Computer";
  else
    this.name = name;
};

Bot.prototype.makeMove = function(choices) {
  var choice = parseInt(Math.random()*choices.length);
  return choices[choice];
};
module.exports = Bot;
