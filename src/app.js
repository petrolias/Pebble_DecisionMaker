/**
 * Pebble DecisionMaker
 */
var UI = require('ui');
var Vector2 = require('vector2');
var m_h = require('helper');

var m_platformX = 0;
var m_platformY = 0;
if (Pebble.getActiveWatchInfo().platform == "chalk") {
    m_platformX = 41;
    m_platformY = 10;
}

var main = new UI.Card({
    title: 'Decision   Maker',
    icon: 'images/Q_32.png',
    subtitle: "Giving you a little decision help when you need it!",
    style: 'small',
    body: 'Press select button',
    subtitleColor: 'black',
    bodyColor: 'black'
});

var menu = new UI.Menu({
    highlightBackgroundColor: 'blue',
    sections: [{
        items: [
            {
                title: 'Optimistic',
                subtitle: 'I feel lucky!',
                icon: 'images/hf_24.png'
            },
            {
                title: 'Pessimistic',
                subtitle: 'I have doubts',
                icon: 'images/he_24.png'
            },
            {
                title: 'Guess',
                subtitle: 'Number (1-10)',
                icon: 'images/dice_24.png'
            }
        ]
    }]
});

main.show();

main.on('click', 'select', function (e) {
    menu.show();
});

var wind = new UI.Window({
    fullscreen: true,
    backgroundColor: 'white'
});
var txt = new UI.Text();
var txt_1 = new UI.Text();
wind.add(txt);
wind.add(txt_1);
var m_allowRefresh = false;
var m_itemIndex = 0;
wind.on('accelTap', function (e) {
    if (m_allowRefresh === true) {
        action(m_itemIndex);
    }
});

menu.on('select', function (e) {
    action(e.itemIndex);
    wind.show();
});

function action(_itemIndex) {
    m_itemIndex = _itemIndex;
    if (txt_1) { wind.remove(txt_1); }
    anim();

    function anim(_timeout) {
        m_allowRefresh = false;
        if (_timeout === undefined) { _timeout = 0; }
        setTimeout(function () {
            var answer = '';
            if (_itemIndex == 2) {
                answer = Math.floor(Math.random() * 9) + 1;
            } else {
                answer = getRandomAnswer(_itemIndex);
            }

            var fnt = 'gothic-28-bold';
            if (m_itemIndex == 2) {
                fnt = 'bitham-42-light';
            }

            if (txt) { wind.remove(txt); }
            txt = new UI.Text({
                position: new Vector2(m_platformX, 32 - m_platformY),
                size: new Vector2(144 - m_platformX, 84),
                font: fnt,
                color: 'blue',
                text: answer,
                textAlign: 'center'
            });
            wind.add(txt);

            if (_timeout < 300) {
                if (_timeout > 100) {
                    anim(_timeout + 20);
                } else {
                    anim(_timeout + 5);
                }
            } else {
                txt_1 = new UI.Text({
                    position: new Vector2(0 + m_platformX, 124),
                    size: new Vector2(144 - m_platformX, 84),
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

function getRandomAnswer(_i) {
    var oi = 5;
    var pi = 6;
    if (_i == 1) {
        oi = 6;
        pi = 4;
    }

    var o = getRandomArrayElements(m_h.op_en(), oi);
    var p = getRandomArrayElements(m_h.ps_en(), pi);
    var a = o.concat(p);
    return a[Math.floor(Math.random() * a.length)];
}