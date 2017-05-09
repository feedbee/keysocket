function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('a.js-pagination--right');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('.controls button.play');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('a.js-pagination--left');
        simulateClick(backButton);
    }
}

pluginLoaded('Vimeo');