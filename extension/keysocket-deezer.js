function onKeyPress(key) {
  if (key === NEXT) {
    var nextButton = document.getElementsByClassName('svg-icon-group-btn')[2];
    simulateClick(nextButton);
  } else if (key === PLAY) {
    var playPauseButton = document.getElementsByClassName(
      'svg-icon-group-btn'
    )[1];
    simulateClick(playPauseButton);
  } else if (key === PREV) {
    var backButton = document.getElementsByClassName('svg-icon-group-btn')[0];
    simulateClick(backButton);
  }
}

pluginLoaded('deezer');
