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

// function spellcheckThis( aString, context ){
//   var language = [[NSSpellChecker sharedSpellChecker] language]
//   var app = NSApplication.sharedApplication();
//   var stopChecking = false;
//   var misspellingcount = 0;
//   var madeAChange=false;
//   var range = [[NSSpellChecker sharedSpellChecker] checkSpellingOfString:aString startingAt:0];
//     // log("range.location:" + range.location + ", range.length:" + range.length);
//   while(range.length >0 ){
//     var cursorLoc=range.location+range.length;
//
//     misspellingcount ++;
//
//     var misSpelledWord = aString.substring(range.location, (range.location+range.length))
//     var guesses = [[NSSpellChecker sharedSpellChecker] guessesForWordRange:range inString:aString language:language inSpellDocumentWithTag:0];
//
//     //Build our alert
//     var alert = NSAlert.alloc().init();
//
//     alert.setMessageText('Spell Check Whole Page');
//     alert.addButtonWithTitle('Skip'); //We must have a button here, so Skip makes the most sense.
//     //alert.setIcon(NSImage.alloc().initWithContentsOfFile(
//     //    context.plugin.urlForResourceNamed('DialogIcon512.png').path()));
//     var nibui = new NibUI(context,
//       'UIBundle', 'SpellCheckWholePage',
//       ['textMisSpelling', 'replaceComboBox', 'btnReplace','btnIgnoreAll','btnAddDict','btnDone','textFullText']);
//
//     alert.setAccessoryView(nibui.view);
//
//     //Set up our text
//     nibui.textMisSpelling.stringValue = "Mispelling: "+ misSpelledWord;
//     nibui.textFullText.stringValue = aString;
//
//     //Put guesses into the combobox
//     nibui.replaceComboBox.removeAllItems();
//     if ( guesses ){
//       if (guesses.length >0){
//         nibui.replaceComboBox.addItemsWithObjectValues( guesses );
//         nibui.replaceComboBox.selectItemAtIndex( 0 );
//       }
//     }
//
//     //Set up our button functions
//     nibui.attachTargetAndAction(nibui.btnReplace, function() {
//       madeAChange=true;
//       //replace it in our string
//       //var newWord = nibui.replaceComboBox.objectValueOfSelectedItem();
//       var newWord = nibui.replaceComboBox.stringValue();
//       aString = aString.replace( misSpelledWord, newWord);
//       cursorLoc = range.location + newWord.length();
//       app.stopModal();
//     });
//
//     nibui.attachTargetAndAction(nibui.btnDone, function() {
//       // Stop!
//       stopChecking = true;
//       app.stopModal();
//     });
//
//     nibui.attachTargetAndAction(nibui.btnIgnoreAll, function(){
//
//       //Ignore word for this document
//       [[NSSpellChecker sharedSpellChecker] ignoreWord: misSpelledWord inSpellDocumentWithTag: 0]
//       app.stopModal();
//     });
//
//     nibui.attachTargetAndAction(nibui.btnAddDict, function() {
//
//       // Add the word to the Dictionary.
//       [[NSSpellChecker sharedSpellChecker] learnWord: misSpelledWord]
//       app.stopModal();
//     });
//     alert.runModal();
//
//     nibui.destroy();
//     if(stopChecking){
//       break; //If the user hits "Done", stop checking
//     }
//     //Recheck the text for a misspelling (and loop again if there is one)
//     range = [[NSSpellChecker sharedSpellChecker] checkSpellingOfString:aString startingAt:cursorLoc];
//
//     if (range.location < cursorLoc ){
//       //Break out of the loop if the search is resetting to the beginning
//       break;
//     }
//   }
//   var spellcheckresult = {"corrected":aString, "madeAChange":madeAChange, "misspellingcount":misspellingcount, "stopChecking":stopChecking};
//   return spellcheckresult;
// }
