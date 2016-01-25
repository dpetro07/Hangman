var Letter = require("./letter.js");

function Word(wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
    this.getLets = function() {
      for (var i = 0; i < this.word.length; i++){

      }
    this.checkIfLetterFound = function(guessLetter) {
      this.whatToReturn = 0;
        for (var i = 0; i < this.lets.length; i++){
          if (this.lets[i].charac === guessLetter)
            this.lets[i].appear = true;
            whatToReturn += 1;
        }
    }
    this.didWeFindTheWord = function() {

    }
    this.wordRender = function() {
      var str = "";
      for (var i =0; i < this.lets.length; i++){

      }
    }
    }
}

module.exports = Word;