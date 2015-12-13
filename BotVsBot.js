"use strict";

var Bot = require("./Bot");

var helpers = require("./helpers");
var rl = helpers.rl;
var CHOICES = helpers.CHOICES;

var play = require("./playGame");
var printWinLossMatrix = require("./winLossMatrix");

var get = function() {
  rl.setPrompt("Quit Game/Continue? (Q/C) >");
  rl.prompt();
};

var playBotVsBot = function() {
  var bot1 = new Bot("Leia");
  var bot2 = new Bot("Luke");
  
  var bot1Results = {
    wins: 0,
    losses: 0
  };

  var bot2Results = {
    wins: 0,
    losses: 0
  };
  console.log("Welcome to the game of Rock, Paper and Scissors\n");
  console.log("************************************************\n");
  console.log("%s and %s will duel it out in the arena", bot1.name, bot2.name);
  
  get();
  rl.on("line", function(line) {
    var quit = line;

    if (quit == "Q") {
      printWinLossMatrix(bot1.name, bot2.name, bot1Results, bot2Results);
      rl.close();
      process.exit(0);
    }
    else {
      var bot1Choice = bot1.makeMove(CHOICES);
      var bot2Choice = bot2.makeMove(CHOICES);
      play(bot1Choice, bot2Choice, bot1.name, bot2.name, bot1Results, bot2Results);
      get();
    }
  });
};
module.exports = playBotVsBot
