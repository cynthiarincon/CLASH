// SET MUSIC VOLUME TO 10% (0 = MUTED, 1 = FULL VOLUME) WHEN PAGE LOADS
const music = document.getElementById("music");
music.volume = 0.1;
music.onplay();