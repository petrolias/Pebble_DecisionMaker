/**
 * Pebble DecisionMaker
 */
// http://icons8.com
var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Decision Maker',
  icon: 'images/BDBI_32.png',
  subtitle: "Giving you a little decision help when you need it!",
  style: 'small',
  body: 'Press select button',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});
var menu = new UI.Menu({
    highlightBackgroundColor: 'blue',
    sections: [{
      items: [
        {
        title: 'Optimistic',
        subtitle: 'I feel lucky!',
        icon: 'images/CCWI_24.png'
        },
        {
        title: 'Pessimistic',
        subtitle: 'I have 2ns thoughts',
        icon: 'images/CDWI_24.png'
        },
        {
        title: 'Guess',
        subtitle: 'Number (1-10)',
        icon: 'images/GDWI_24.png'
        }
      ]
    }]
  });

main.show();

main.on('click', 'select', function(e) {
    menu.show();
});
var wind = new UI.Window({
    fullscreen: true,
    backgroundColor : 'white'
  });
var txt = new UI.Text();
var txt_1 = new UI.Text();
wind.add(txt);
wind.add(txt_1);
var m_allowRefresh = false;
var m_itemIndex = 0;
 wind.on('accelTap', function(e) {
   if (m_allowRefresh === true) {
     action(m_itemIndex);
   }        
  });

menu.on('select', function(e) {
  action(e.itemIndex);
  wind.show();
});

function action(_itemIndex){
  m_itemIndex = _itemIndex;
  if (txt_1){wind.remove(txt_1);}
  anim();
  
  function anim(_timeout){
    m_allowRefresh = false;
    if (_timeout === undefined){_timeout=0;}
    setTimeout(function(){ 
      var answer ='';
      if (_itemIndex==2){
        answer=Math.floor(Math.random()*9)+1;
      }else {
        answer=getRandomAnswer(_itemIndex);
      }
      
      if (txt){wind.remove(txt);}
      txt = new UI.Text({
        position: new Vector2(0, 32),
        size: new Vector2(144, 84),
        font: 'gothic-28-bold',
        color: 'blue',
        text: answer,
        textAlign: 'center'
      });
      wind.add(txt);
      
      if (_timeout<300) {
        if (_timeout>100){
               anim(_timeout+20);
        }else {
               anim(_timeout+5);
        }
      } else {
        txt_1 = new UI.Text({
          position: new Vector2(0, 124),
          size: new Vector2(144, 84),
          font: 'gothic-18',
          color: 'black',
          text: 'Shake to try again',
          textAlign: 'center'
        });
        wind.add(txt_1); 
        m_allowRefresh = true;
      }
      
      }, _timeout);
  }
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
    "Just do it",
    "Your heart says yes"
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
  
  var ps= [
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
    "Not a vert wise thing to do",
    "You have better things to consider"
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