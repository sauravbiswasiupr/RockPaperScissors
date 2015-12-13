"use strict";
var assert = require("assert");
var _ = require("lodash");
var expect = require("chai").expect;

var Bot = require("./Bot");
var constructMap = require("./comparatorMap");
var play = require("./playGame");

var createMockChoiceMap = function() {
  var choices = ["Rock", "Paper", "Scissors"];
  var map = constructMap(choices);
  return map;
};

describe("Test the game functionalities", function() {
  it("should create default player with name 'Computer'", function() {
    var bot = new Bot();
    assert.equal(bot.name, "Computer");
  });

  it("should create two different players", function() {
    var bot1 = new Bot("Darth Vader");
    var bot2 = new Bot("Chewbacca");
    
    expect(bot1).to.not.deep.equal(bot2);
  });
  
  it("Rock should crush scissors", function() {
    var choiceMap = createMockChoiceMap();
    var bot1Choice = "Rock";
    var bot2Choice = "Scissors";

    expect(choiceMap[bot1Choice][bot2Choice]).to.equal("Rock");
  });

  it("Should be a tie", function() {
    var map = createMockChoiceMap();
    var choice1 = "Paper";
    var choice2 = "Paper";

    expect(map[choice1][choice2]).to.equal("TIE");
  });

  it("Invalid choice should throw an exception", function() {
    var bot1 = "You";
    var bot2 = "Me";
    var choice1 = "Rock";
    var choice2 = "Ahora";

    function throwsError() {
      play(choice1, choice2, bot1, bot2, {}, {});
    }
  
    expect(throwsError).to.throw("Invalid choice!");
  });
});


