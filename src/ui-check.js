import checkRhythm from './ui-checks/check-rhythm.js';

export function sizeCheck(context) {
  var action = context.actionContext;
  var resizeTarget = action.layers[0];

  var width = resizeTarget.frame().width()
  var height = resizeTarget.frame().height()

  //Insert size check modules here
  checkRhythm(width, height)
}
