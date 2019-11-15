var UI = require('sketch/ui');

export function checkWords(aString){
  let words = [
   {
     "insteadOf": "he",
     "use": "they"
   },
   {
     "insteadOf": "she",
     "use": "they"
   },
   {
     "insteadOf": "his",
     "use": "their"
   },
   {
     "insteadOf": "her",
     "use": "their"
   },
   {
     "insteadOf": "user",
     "use": "person"
   },
   {
     "insteadOf": "user",
     "use": "someone"
   },
   {
     "insteadOf": "user",
     "use": "anyone"
   },
   {
     "insteadOf": "users",
     "use": "customers"
   },
   {
     "insteadOf": "users",
     "use": "people"
   },
   {
     "insteadOf": "activate",
     "use": "turn on"
   },
   {
     "insteadOf": "administer",
     "use": "manage"
   },
   {
     "insteadOf": "assist",
     "use": "help"
   },
   {
     "insteadOf": "begin",
     "use": "start"
   },
   {
     "insteadOf": "complete",
     "use": "finish"
   },
   {
     "insteadOf": "configure",
     "use": "set up"
   },
   {
     "insteadOf": "customize",
     "use": "edit"
   },
   {
     "insteadOf": "deactivate",
     "use": "turn off"
   },
   {
     "insteadOf": "disable",
     "use": "turn off"
   },
   {
     "insteadOf": "display",
     "use": "show"
   },
   {
     "insteadOf": "enable",
     "use": "turn on"
   },
   {
     "insteadOf": "input",
     "use": "enter"
   },
   {
     "insteadOf": "modify",
     "use": "edit"
   },
   {
     "insteadOf": "notify",
     "use": "let you know"
   },
   {
     "insteadOf": "optimize",
     "use": "make it better"
   },
   {
     "insteadOf": "present",
     "use": "show"
   },
   {
     "insteadOf": "provide",
     "use": "give"
   },
   {
     "insteadOf": "provide",
     "use": "include"
   },
   {
     "insteadOf": "provide",
     "use": "show"
   },
   {
     "insteadOf": "purchase",
     "use": "buy"
   },
   {
     "insteadOf": "purchase",
     "use": "pay"
   },
   {
     "insteadOf": "receive",
     "use": "get"
   },
   {
     "insteadOf": "remain",
     "use": "stay"
   },
   {
     "insteadOf": "retain",
     "use": "keep"
   },
   {
     "insteadOf": "submit",
     "use": "send"
   },
   {
     "insteadOf": "utilize",
     "use": "use"
   },
   {
     "insteadOf": "able to",
     "use": "can"
   },
   {
     "insteadOf": "allows you to",
     "use": "lets you"
   },
   {
     "insteadOf": "cannot",
     "use": "can’t"
   },
   {
     "insteadOf": "enables you to",
     "use": "lets you"
   },
   {
     "insteadOf": "gives you the ability to",
     "use": "lets you"
   },
   {
     "insteadOf": "in order to",
     "use": "to"
   },
   {
     "insteadOf": "required to",
     "use": "need to"
   },
   {
     "insteadOf": "to be able to",
     "use": "to"
   },
   {
     "insteadOf": "unable to",
     "use": "can’t"
   },
   {
     "insteadOf": "regarding",
     "use": "about"
   },
   {
     "insteadOf": "regarding",
     "use": "for"
   },
   {
     "insteadOf": "associated with",
     "use": "a part of"
   },
   {
     "insteadOf": "additional",
     "use": "more"
   },
   {
     "insteadOf": "additional",
     "use": "other"
   },
   {
     "insteadOf": "additional",
     "use": "different"
   },
   {
     "insteadOf": "alternative",
     "use": "other"
   },
   {
     "insteadOf": "due to the fact",
     "use": "since"
   },
   {
     "insteadOf": "due to the fact",
     "use": "because"
   },
   {
     "insteadOf": "e.g.",
     "use": "like"
   },
   {
     "insteadOf": "e.g.",
     "use": "for example"
   },
   {
     "insteadOf": "such as",
     "use": "like"
   },
   {
     "insteadOf": "in lieu of",
     "use": "instead of"
   },
   {
     "insteadOf": "currently",
     "use": "at the moment"
   },
   {
     "insteadOf": "currently",
     "use": "now"
   },
   {
     "insteadOf": "currently",
     "use": "right now"
   },
   {
     "insteadOf": "following",
     "use": "after"
   },
   {
     "insteadOf": "following",
     "use": "next"
   },
   {
     "insteadOf": "in conjunction with",
     "use": "at the same time"
   },
   {
     "insteadOf": "initial",
     "use": "first"
   },
   {
     "insteadOf": "preceding",
     "use": "before"
   },
   {
     "insteadOf": "simultaneously",
     "use": "at the same time"
   },
   {
     "insteadOf": "subsequent",
     "use": "future"
   },
   {
     "insteadOf": "subsequent",
     "use": "later"
   },
   {
     "insteadOf": "subsequent",
     "use": "upcoming"
   },
   {
     "insteadOf": "credentials",
     "use": "username and password"
   },
   {
     "insteadOf": "customizations",
     "use": "changes"
   },
   {
     "insteadOf": "customizations",
     "use": "edits"
   },
   {
     "insteadOf": "customizations",
     "use": "settings"
   },
   {
     "insteadOf": "methods",
     "use": "ways"
   },
   {
     "insteadOf": "optimization",
     "use": "improvement"
   },
   {
     "insteadOf": "the system",
     "use": "we"
   },
   {
     "insteadOf": "transaction",
     "use": "order"
   },
   {
     "insteadOf": "URL",
     "use": "link"
   }
  ]

  for(var word of words) {
    var regex = '\\b';
    regex += word.insteadOf;
    regex += '\\b';
    if (new RegExp(regex, "i").test(aString)) {
      UI.message("🤖 Considered using '" + word.use + "' instead of '" + word.insteadOf + "'.");
      break;
    }
  }
}
