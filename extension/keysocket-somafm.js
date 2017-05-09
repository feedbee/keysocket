function onKeyPress(key) {
    if (key === PLAY) {
        simulateClick(document.getElementById('playBtn'));
    }
}

pluginLoaded('somafm');