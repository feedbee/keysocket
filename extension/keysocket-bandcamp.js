function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector('.inline_player .prevbutton'));
    } else if (key === NEXT) {
        simulateClick(document.querySelector('.inline_player .nextbutton'));
    } else if (key === PLAY) {
        simulateClick(document.querySelector('.inline_player .playbutton'));
    }
}

pluginLoaded('bandcamp');