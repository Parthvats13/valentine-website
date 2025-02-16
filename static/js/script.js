document.addEventListener("DOMContentLoaded", function () {
    const musicBtn = document.getElementById("mute-unmute-btn");
    const music = document.getElementById("background-music");

    // Play music on page load
    music.volume = 0.05; // Set volume (adjust as needed)
    music.play();

    // Handle button click
    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "🔊"; // Update button to unmute icon
        } else {
            music.pause();
            musicBtn.textContent = "🔇"; // Update button to mute icon
        }
    });
});