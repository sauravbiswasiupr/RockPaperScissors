"use strict";

var constructMap = function(choices) {
  var map = {};
  var n = choices.length;

  choices.forEach(function(choice, i) {
    map[choice] = {};
    for (var j = 0, half = (n-1)/2; j < n; j++) {
      var opponent = (i+j)%n;
      if (!j)
        map[choice][choice] = "TIE";
      else if (j <= half)
        map[choice][choices[opponent]] = choices[opponent];
      else
        map[choice][choices[opponent]] = choice;
    }
  });

  return map;
};
module.exports = constructMap;

