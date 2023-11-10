document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var playButton = document.getElementById("playPause");
    var muteButton = document.getElementById("muteToggle");
    var seekBar = document.getElementById("seekBar");
    var volumeControl = document.getElementById("volumeControl");

    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    muteButton.addEventListener("click", function() {
        video.muted = !video.muted;
    });

    seekBar.addEventListener("change", function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    volumeControl.addEventListener("input", function() {
        video.volume = volumeControl.value;
    });

    video.addEventListener("timeupdate", function() {
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    // Add more event listeners and functionality as needed
});
