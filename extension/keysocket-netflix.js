function onKeyPress(key) {
    if (key === NEXT) {
        var nextButtonEpisode = document.querySelector('.button-nfplayerNextEpisode');
        simulateClick(nextButtonEpisode);
    } else if (key === PREV) {
        var prevButtonEpisode = null;
        var episodeList = document.querySelector('li.episode-list-item--expanded');
        if (episodeList) {
            prevButtonEpisode = episodeList.previousElementSibling.querySelector('div.play-icon');
            if (prevButtonEpisode) {
                episodeList.previousElementSibling.className += ' episode-list-item--expanded';
                simulateClick(prevButtonEpisode);
            }
        }
    } else if (key === PLAY) {
        playPauseButton = document.querySelector('.button-nfplayerPlay, .button-nfplayerPause');
        simulateClick(playPauseButton);
    } else if (key === STOP) {
            var playPauseButton = document.querySelector('.button-nfplayerPause');
            simulateClick(playPauseButton);
    }
}

pluginLoaded('netflix');
