//var Accel = require('ui/accel');
//Accel.config({rate:90});

// menu.on('accelData', function(e) {
//   //console.log('Accel data: ' + JSON.stringify(e.accel));
//   var d =0;
//    if (e.accels[24].y>300) {
//       d = -1;
//     }else if (e.accels[24].y<-600){
//       d = +1;
//     }
//   var si = this._selection.itemIndex;
//   si = si + d;
//   if (si == this.state.sections[0].items.length) {si = 0;}
//   if (si < 0) {si = this.state.sections[0].items.length - 1;}
//   this.selection(0,si);
// });
exports.op_en = function() {
  return [
    "Go for it!",
    "Do it now!",
    "Definitely",
    "Yeah!",
    "Like a boss!",
    "Yes",
    "What are you waiting for?",
    "Try it",
    "Just do it",
    "Your heart says yes",
    "Do it",
    "Proceed",
    "A little bird said yes",
    "Simon said yes",
    "Everyone knows it's a yes",
    "Pebble said yes",
    "Positive",
    "Final result...yes!",
    "My sources says yes!",
    "Looks promising!",
    "Sounds like a great idea",
    "Come on.. do it!",
    "Sure thing!",
    "Certainly",
    "Wise thing to do"
    ];
};

exports.ps_en = function() {
  return [
      "Do something else",
      "No way!",
      "Maybe later",
      "Try again",
      "Do you have other options?",
      "Ask someone for an advice",
      "Forget it",
      "No luck",
      "just...no",
      "You should not",
      "Results may vary",
      "Caution",
      "Decide not to",
      "Some other time",
      "Don't do it",
      "Do not proceed",
      "A little bird said no",
      "Simon said no",
      "Everybody said no",
      "Pebble said no",
      "Pebble said you must think it again",
      "Shake your hand again, the result was negative",
      "Negative",
      "Final result...no!",
      "My sources says no!",
      "Sounds like a bad idea",
      "Step back boy!",
      "Ehmmm.. no",
      "Better not",
      "Bad idea",
      "Not a very wise thing to do",
      "You have better things to consider"
    ];
};