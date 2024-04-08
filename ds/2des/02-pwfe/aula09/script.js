const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const playlist = document.getElementById('playlist');
const coverImage = document.getElementById('coverImage');
let currentSongIndex = 0;

function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.src = 'Pause"';
  } else {
    audioPlayer.pause();
    playPauseButton.src = 'Play';
  }
}
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.children.length;
    loadSong();
}
function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.children.length) % playlist.children.length;
    loadSong();
}

function loadSong() {
  const songItem = playlist.children[currentSongIndex];
  const songSrc = songItem.dataset.src;
  const coverSrc = songItem.dataset.cover;

    audioPlayer.src = songSrc;
    coverImage.src = coverSrc;
    audioPlayer.play();
}
playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

playlist.addEventListener('click', (event) => {
    const clickedIndex = Array.from(playlist.children).indexOf(event.target);
    if (clickedIndex !== -1) {
        currentSongIndex = clickedIndex;
        loadSong();
    }
});
loadSong();