// @import 'sketch-nibui.js';

framework('NSSpellChecker')
var UI = require('sketch/ui');

export function checkSpelling( aString ){
  var language = NSSpellChecker.sharedSpellChecker().language()
  var misspellingcount = 0;
  var range = NSSpellChecker.sharedSpellChecker().checkSpellingOfString_startingAt(aString, 0);
  if(range.length >0 ){
    var cursorLoc=range.location+range.length;
    misspellingcount ++;
    var misSpelledWord = aString.substring(range.location, (range.location+range.length))
    //Recheck the text for a misspelling (and loop again if there is one)
    range = NSSpellChecker.sharedSpellChecker().checkSpellingOfString_startingAt(aString, 0);
  }

  //Reset range
  range = NSSpellChecker.sharedSpellChecker().checkSpellingOfString_startingAt(aString, 0);

  if (misspellingcount > 0) {
    UI.message("Your spelling is 💩");
  }
}
