/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
//var Accel = require('ui/accel');
//Accel.config({rate:90});

var main = new UI.Card({
  title: 'Decision Maker',
  icon: 'images/menu_icon.png',
  subtitle: 'Do you feel uncertain?',
  body: 'Press select button',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});
var menu = new UI.Menu({
    sections: [{
      items: [
        {
        title: 'Optimistic',
        subtitle: 'I feel lucky!'
        },
        {
        title: 'Pessimistic',
        subtitle: 'I have second thoughts'
        },
        {
        title: 'Guess my though',
        subtitle: 'Random number (1-10)'
        }
      ]
    }]
  });

main.show();

main.on('click', 'select', function(e) {
    menu.show();
});

menu.on('select', function(e) {
  var answer ='';
  if (e.itemIndex==2){
    answer=getRandomNumber();
  }else {
    answer=getRandomAnswer(e.itemIndex);
  }
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 100),
    font: 'gothic-24-bold',
    text: answer,
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

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

function getRandomNumber(){
  return Math.floor(Math.random()*9)+1;
}

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function getRandomAnswer(_i){
  var op = [
    "Go for it!",
    "Do it now!",
    "Definitely",
    "Definitely maybe",
    "Yeah!",
    "Like a boss!",
    "Yes",
    "What are you waiting for?",
    "Try it",
    "Just do it"
    ];
  
  var ps= [
    'Do something else',
    'No way!',
    'Maybe later',
    'Try again',
    'Do you have other options?',
    'Ask someone for an advice',
    'Forget it',
    'No luck',
    'just...no',
    'You should not'
  ];
  
  var oi = 5;
  var pi=6;
  if (_i==1){
    oi=6;
    pi=4;
  }
  
  var o = getRandomArrayElements(op, oi);
  var p = getRandomArrayElements(ps, pi);
  var a = o.concat(p);
  return a[Math.floor(Math.random()*a.length)];
}