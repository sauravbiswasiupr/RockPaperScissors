"use strict"

var printWinLossMatrix = function(bot1Name, bot2Name, bot1Results, bot2Results) {
  console.log("**************************");
  console.log("Name | WINS | LOSSES");
  console.log("***************************");
  console.log(bot1Name + "\t" + bot1Results.wins + "\t" + bot1Results.losses);
  console.log(bot2Name + "\t" + bot2Results.wins + "\t" + bot2Results.losses);
};
module.exports = printWinLossMatrix;
