"use strict";

var startIOLoop = require("./humanVsComputer");
var startSimulatedGame = require("./BotVsBot");
/*
 * Execute the game function immediately upon invocation
 */

(function() {
  var options = process.argv[2];
  // If no option was passed start game vs human
  if (options == null)  
    startIOLoop();
  else
     if (options == "simulate" || options == "sim")
        startSimulatedGame();
  
})();
