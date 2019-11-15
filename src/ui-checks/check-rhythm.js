var UI = require('sketch/ui');

export function checkRhythm(width, height){
  if(width%8){
    UI.message("Considered adjusting width by " + width%8 + " to fit a 8px rhythm");
  }
  if(height%8){
    UI.message("Considered adjusting height by " + height%8 + " to fit a 8px rhythm");
  }
}
