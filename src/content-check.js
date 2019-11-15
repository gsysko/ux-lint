import {checkWords} from './content-checks/check-robotic-words.js';
import {checkSpelling} from './content-checks/check-spelling.js';

export function textCheck(context) {
  var sketch = context.api();
  var action = context.actionContext;

  var selection = action.layer;
  var textToCheck = new sketch.Text(selection, sketch.selectedDocument);
  checkWords(textToCheck.text);
  checkSpelling(textToCheck.text);
}

export function symbolCheck(context) {
  var action = context.actionContext;

  if (action.oldSelection && action.oldSelection[0] instanceof MSSymbolInstance){
    //IS a symbol...
    var overrides = action.oldSelection[0].overrides()
    checkOverrides(overrides)
  } else {
    //Is NOT a symbol... rely on TextChanged instead.
  }
}

function checkOverrides(overrides) {
  if (typeof overrides.objectEnumerator === 'function'){
    var iterator = overrides.objectEnumerator()
    var overrideValue
    while(overrideValue =iterator.nextObject()){
      checkOverrides(overrideValue)
    }
  } else {
    //TODO need to check that this works properly (i.e. ignores) non-text overrides
    checkWords(overrides)
    checkSpelling(overrides)
  }
}
