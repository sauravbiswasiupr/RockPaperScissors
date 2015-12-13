"use strict";
var constructMap = require("./comparatorMap");
var CHOICES = require("./helpers").CHOICES;

var play = function(bot1Choice, bot2Choice, bot1Name, bot2Name, bot1Results, bot2Results) {
  console.log("%s CHOSE: %s", bot1Name, bot1Choice);
  console.log("%s CHOSE: %s", bot2Name, bot2Choice);
  
  if (bot1Choice == null || bot2Choice == null)
    throw new Error("Empty choice");
  if (CHOICES.indexOf(bot1Choice) === -1 || CHOICES.indexOf(bot2Choice) === -1)
    throw new Error("Invalid choice!");

  var map = constructMap(CHOICES);
  var winString;
  if (bot2Name === "YOU")
    winString = "WIN";
  else
    winString = "WINS";

  if (map[bot1Choice][bot2Choice] === "TIE")
    console.log("It is a tie!!!");
  else {
    if (bot1Choice === map[bot1Choice][bot2Choice]) {
      console.log(bot1Name + " " + winString);
      bot1Results.wins += 1;
      bot2Results.losses += 1;
    } else {
      console.log(bot2Name + " " + winString);
      bot2Results.wins += 1;
      bot1Results.losses += 1;
    }
  }
};
module.exports = play;
