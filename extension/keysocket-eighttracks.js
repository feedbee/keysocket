var playButtonSelector = '#player_play_button';
var pauseButtonSelector = '#player_pause_button';
var skipButtonSelector = '#player_skip_button';
var nextMixButtonSelector = '#next_mix_button';
    
function onKeyPress(key) {
    if (key === NEXT) {
        pressOneButtonOrAnother(skipButtonSelector, nextMixButtonSelector)
    } else if (key === PLAY) {
        pressOneButtonOrAnother(playButtonSelector, pauseButtonSelector)
    }
}

function pressOneButtonOrAnother(oneButtonSelector, anotherButtonSelector) {
    var oneButton = document.querySelector(oneButtonSelector);
    if(window.getComputedStyle(oneButton).display !== "none"){
        simulateClick(oneButton);
    }
    else{
        var anotherButton = document.querySelector(anotherButtonSelector);
        simulateClick(anotherButton);
    }
}

pluginLoaded('8tracks');
