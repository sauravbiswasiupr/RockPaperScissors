"use strict";
var Bot = require("./Bot");

var helpers = require("./helpers");
var rl = helpers.rl;
var get = helpers.get;
var CHOICES = helpers.CHOICES;

var play = require("./playGame");
var printWinLossMatrix = require("./winLossMatrix");

var startIOLoop = function() {
    console.log("Starting the game .....");
    var bot = new Bot("YODA");
    var botResults = {
      wins: 0,
      losses: 0
    };

    var yourResults = {
      wins: 0,
      losses: 0
    };
    var yourChoice;

    console.log("Welcome to the game Rock, paper, scissors");
    console.log("*****************************************\n");
    console.log("You are playing against %s, the evil computer genius! Good luck!", bot.name);
  
    get();
  
    rl.on("line", function(line) {
      yourChoice = line;

      if (yourChoice === "Q") {
        printWinLossMatrix(bot.name, "YOU", botResults, yourResults);
        rl.close();
        process.exit(0);
      }
    
      var botChoice = bot.makeMove(CHOICES);
      play(botChoice, yourChoice, bot.name, "YOU", botResults, yourResults);
      get();
  });
};
module.exports = startIOLoop;
